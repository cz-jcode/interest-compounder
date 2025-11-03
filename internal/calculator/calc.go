package calculator

import (
	"errors"
	"math"
)

var monthDays = [12]int{31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}

// round2 rounds to 2 decimal places (financial style).
func round2(v float64) float64 {
	return math.Round(v*100) / 100
}

// inRange checks if m is within [start, end] where end -1 means infinity.
func inRange(m, start, end int) bool {
	if m < start {
		return false
	}
	if end < 0 {
		return true
	}
	return m <= end
}

// Compute runs the compound interest timeline simulation and returns monthly and yearly series.
// See Request for assumptions.
func Compute(req Request) (Response, error) {
	if req.TotalMonths < 0 {
		return Response{}, errors.New("totalMonths must be >= 0")
	}
	if req.AnnualRate < 0 {
		return Response{}, errors.New("annualRate must be >= 0")
	}
	if req.ContributionTiming == "" {
		req.ContributionTiming = TimingStart
	}

	monthlyRate := req.AnnualRate / 12.0

	balance := req.InitialPrincipal
	principal := req.InitialPrincipal
	var monthly []MonthlyPoint
	var yearly []YearlyPoint

	// pre-index one-time contributions by month
	oneTimeByMonth := make(map[int]float64)
	for _, ot := range req.OneTime {
		if ot.AtMonth >= 0 && ot.AtMonth <= req.TotalMonths { // allow at end as final month start
			oneTimeByMonth[ot.AtMonth] += ot.Amount
		}
	}

	// We'll simulate each month m from 0 to TotalMonths-1 inclusive.
	for m := 0; m < req.TotalMonths; m++ {
		monthIdx := m
		// Apply start-of-month contributions
		startContrib := oneTimeByMonth[m]
		// recurring at start
		for _, rc := range req.Recurring {
			if !inRange(m, rc.StartMonth, rc.EndMonth) {
				continue
			}
			switch rc.Schedule {
			case ScheduleDaily:
				// days in this month
				days := monthDays[m%12]
				startContrib += rc.Amount * float64(days)
			case ScheduleMonthly:
				if req.ContributionTiming == TimingStart {
					startContrib += rc.Amount
				}
			case ScheduleYearly:
				if req.ContributionTiming == TimingStart {
					// apply at the first month of each 12-month block within [start,end]
					if (m-rc.StartMonth)%12 == 0 {
						startContrib += rc.Amount
					}
				}
			}
		}
		if startContrib != 0 {
			balance += startContrib
			principal += startContrib
		}

		// Accrue interest for this month
		interest := balance * monthlyRate
		balance += interest

		// Apply end-of-month contributions (for monthly/yearly when timing=end)
		endContrib := 0.0
		for _, rc := range req.Recurring {
			if !inRange(m, rc.StartMonth, rc.EndMonth) {
				continue
			}
			switch rc.Schedule {
			case ScheduleMonthly:
				if req.ContributionTiming == TimingEnd {
					endContrib += rc.Amount
				}
			case ScheduleYearly:
				if req.ContributionTiming == TimingEnd {
					// end of year means month 11,23,... relative to start
					if (m-rc.StartMonth)%12 == 11 {
						endContrib += rc.Amount
					}
				}
			}
		}
		if endContrib != 0 {
			balance += endContrib
			principal += endContrib
		}

		monthly = append(monthly, MonthlyPoint{
			MonthIndex: monthIdx,
			Principal:  round2(principal),
			Interest:   round2(interest),
			Balance:    round2(balance),
		})

		// End of year snapshot (after months 11,23,...) or last month
		if (m%12 == 11) || m == req.TotalMonths-1 {
			// compute interest accrued in this year: sum of month points within this year
			yearStart := m - (m % 12)
			if yearStart < 0 {
				yearStart = 0
			}
			yrInterest := 0.0
			for i := yearStart; i <= m; i++ {
				yrInterest += monthly[i].Interest
			}
			yearly = append(yearly, YearlyPoint{
				YearIndex: (m / 12) + 1,
				Principal: round2(monthly[m].Principal),
				Interest:  round2(yrInterest),
				Balance:   round2(monthly[m].Balance),
			})
		}
	}

	var resp Response
	resp.Monthly = monthly
	resp.Yearly = yearly
	if len(monthly) > 0 {
		resp.Totals.Principal = monthly[len(monthly)-1].Principal
		totalInterest := 0.0
		for _, mp := range monthly {
			totalInterest += mp.Interest
		}
		resp.Totals.Interest = round2(totalInterest)
		resp.Totals.Balance = monthly[len(monthly)-1].Balance
	} else {
		resp.Totals.Principal = round2(req.InitialPrincipal)
		resp.Totals.Interest = 0
		resp.Totals.Balance = round2(req.InitialPrincipal)
	}
	return resp, nil
}
