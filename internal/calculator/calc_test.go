package calculator

import (
	"math"
	"testing"
)

func almostEq(a, b float64) bool {
	return math.Abs(a-b) < 0.01
}

func TestCompute_NoContributions(t *testing.T) {
	req := Request{
		InitialPrincipal:   1000,
		AnnualRate:         0.12, // 1% per month
		TotalMonths:        12,
		ContributionTiming: TimingStart,
	}
	resp, err := Compute(req)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if len(resp.Monthly) != 12 {
		t.Fatalf("expected 12 monthly points, got %d", len(resp.Monthly))
	}
	// closed form: 1000 * (1+0.01)^12
	expected := 1000 * math.Pow(1+0.12/12, 12)
	if !almostEq(resp.Monthly[11].Balance, expected) {
		t.Fatalf("balance mismatch: got %.2f want %.2f", resp.Monthly[11].Balance, expected)
	}
}

func TestCompute_MonthlyContrib_Start(t *testing.T) {
	req := Request{
		InitialPrincipal: 0,
		AnnualRate:       0.06,
		TotalMonths:      12,
		Recurring: []RecurringContribution{
			{Schedule: ScheduleMonthly, Amount: 100, StartMonth: 0, EndMonth: -1},
		},
		ContributionTiming: TimingStart,
	}
	resp, err := Compute(req)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	// Future value of annuity due (payments at start): P * [((1+r)^n - 1)/r] * (1+r)
	r := req.AnnualRate / 12
	expected := 100 * (((math.Pow(1+r, 12) - 1) / r) * (1 + r))
	if !almostEq(resp.Monthly[11].Balance, expected) {
		t.Fatalf("balance mismatch: got %.2f want %.2f", resp.Monthly[11].Balance, expected)
	}
	if resp.Totals.Principal != 1200 {
		t.Fatalf("principal total: got %.2f want 1200", resp.Totals.Principal)
	}
}

func TestCompute_MonthlyContrib_End(t *testing.T) {
	req := Request{
		InitialPrincipal: 0,
		AnnualRate:       0.06,
		TotalMonths:      12,
		Recurring: []RecurringContribution{
			{Schedule: ScheduleMonthly, Amount: 100, StartMonth: 0, EndMonth: -1},
		},
		ContributionTiming: TimingEnd,
	}
	resp, err := Compute(req)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	// Future value of ordinary annuity (payments at end): P * [((1+r)^n - 1)/r]
	r := req.AnnualRate / 12
	expected := 100 * ((math.Pow(1+r, 12) - 1) / r)
	if !almostEq(resp.Monthly[11].Balance, expected) {
		t.Fatalf("balance mismatch: got %.2f want %.2f", resp.Monthly[11].Balance, expected)
	}
}

func TestCompute_DailyContrib_BatchedByDays(t *testing.T) {
	req := Request{
		InitialPrincipal: 0,
		AnnualRate:       0.12, // 1% monthly for easy checks
		TotalMonths:      1,
		Recurring: []RecurringContribution{
			{Schedule: ScheduleDaily, Amount: 10, StartMonth: 0, EndMonth: -1}, // 10 per day
		},
		ContributionTiming: TimingStart, // timing irrelevant for daily (batched at start)
	}
	resp, err := Compute(req)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	// Month 0 has 31 days -> 310 contributed, then 1% interest
	expected := 310 * (1 + 0.12/12)
	if !almostEq(resp.Monthly[0].Balance, expected) {
		t.Fatalf("m0 balance: got %.2f want %.2f", resp.Monthly[0].Balance, expected)
	}
}

func TestCompute_YearlyContrib_StartAndEnd(t *testing.T) {
	// Two scenarios: timing start vs end across 24 months
	// Start timing: amount applied at month 0 and 12
	// End timing: amount applied at month 11 and 23
	reqStart := Request{
		InitialPrincipal: 0,
		AnnualRate:       0.12,
		TotalMonths:      24,
		Recurring: []RecurringContribution{
			{Schedule: ScheduleYearly, Amount: 1200, StartMonth: 0, EndMonth: -1},
		},
		ContributionTiming: TimingStart,
	}
	reqEnd := reqStart
	reqEnd.ContributionTiming = TimingEnd

	respStart, err := Compute(reqStart)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	respEnd, err := Compute(reqEnd)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if respStart.Monthly[0].Balance <= respEnd.Monthly[0].Balance {
		t.Fatalf("expected start timing to yield higher early balance")
	}
	if respStart.Totals.Principal != respEnd.Totals.Principal {
		t.Fatalf("principal totals should match")
	}
}

func TestCompute_OneTime_MonthOffset(t *testing.T) {
	req := Request{
		InitialPrincipal: 500,
		AnnualRate:       0.0,
		TotalMonths:      3,
		OneTime:          []OneTimeContribution{{Amount: 200, AtMonth: 1}},
	}
	resp, err := Compute(req)
	if err != nil {
		t.Fatalf("unexpected: %v", err)
	}
	if resp.Monthly[0].Balance != 500 { // no interest, no contrib yet
		t.Fatalf("m0 balance got %.2f want 500", resp.Monthly[0].Balance)
	}
	if resp.Monthly[1].Balance != 700 { // contribution applied at start of month 1
		t.Fatalf("m1 balance got %.2f want 700", resp.Monthly[1].Balance)
	}
	if resp.Totals.Principal != 700 {
		t.Fatalf("totals principal got %.2f want 700", resp.Totals.Principal)
	}
}
