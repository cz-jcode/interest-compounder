package calculator

// ScheduleType defines the recurrence unit for contributions.
type ScheduleType string

const (
	ScheduleDaily   ScheduleType = "daily"
	ScheduleMonthly ScheduleType = "monthly"
	ScheduleYearly  ScheduleType = "yearly"
)

// Timing indicates whether recurring contributions are applied at the start or end of the period.
type Timing string

const (
	TimingStart Timing = "start"
	TimingEnd   Timing = "end"
)

// RecurringContribution represents an automatic recurring contribution configuration.
type RecurringContribution struct {
	Schedule   ScheduleType `json:"schedule"`
	Amount     float64      `json:"amount"`
	StartMonth int          `json:"startMonth"` // inclusive month offset from 0
	EndMonth   int          `json:"endMonth"`   // inclusive month offset; -1 means no end (until horizon)
}

// OneTimeContribution represents a single contribution at a specific month offset.
type OneTimeContribution struct {
	Amount  float64 `json:"amount"`
	AtMonth int     `json:"atMonth"` // exact month offset from 0
}

// Request is the API/calculator input.
// Assumptions:
// - Compounding is monthly. The effective monthly rate is annualRate/12.
// - Daily recurring contributions are batched into each month as amountPerDay * daysInMonth.
// - Monthly and yearly recurring contributions are applied at the start of their period when Timing==start, otherwise at the end of the month/year.
// - One-time contributions are applied at the start of their target month.
// - Month lengths are based on a 365-day calendar with month-day counts [31,28,31,30,31,30,31,31,30,31,30,31] cycling; leap years ignored for simplicity.
// - annualRate is a decimal fraction (e.g., 0.07 for 7%).
type Request struct {
	Name               string                  `json:"name"`
	Currency           string                  `json:"currency"`
	InitialPrincipal   float64                 `json:"initialPrincipal"`
	AnnualRate         float64                 `json:"annualRate"`
	TotalMonths        int                     `json:"totalMonths"`
	Recurring          []RecurringContribution `json:"recurring"`
	OneTime            []OneTimeContribution   `json:"oneTime"`
	ContributionTiming Timing                  `json:"contributionTiming"` // start or end (affects monthly/yearly recurring only)
}

// MonthlyPoint represents the end-of-month snapshot.
type MonthlyPoint struct {
	MonthIndex int     `json:"month"`     // 0-based month index in the timeline
	Principal  float64 `json:"principal"` // cumulative principal contributed up to and including this month
	Interest   float64 `json:"interest"`  // interest earned during this month
	Balance    float64 `json:"balance"`   // end-of-month balance
}

// YearlyPoint represents the end-of-year (every 12 months) snapshot.
type YearlyPoint struct {
	YearIndex int     `json:"year"`      // 1-based year number
	Principal float64 `json:"principal"` // cumulative principal up to end of this year
	Interest  float64 `json:"interest"`  // interest earned during this year
	Balance   float64 `json:"balance"`   // end-of-year balance
}

// Response contains series suitable for plotting.
type Response struct {
	Monthly []MonthlyPoint `json:"monthly"`
	Yearly  []YearlyPoint  `json:"yearly"`
	Totals  struct {
		Principal float64 `json:"principal"`
		Interest  float64 `json:"interest"`
		Balance   float64 `json:"balance"`
	} `json:"totals"`
}
