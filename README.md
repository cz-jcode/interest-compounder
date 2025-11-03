# Compound Interest Calculator API (Go)

This project provides an HTTP API for simulating compound interest with multiple contribution schedules (daily, monthly, yearly) and one‑time injections. It returns monthly and yearly series suitable for plotting charts.

## Assumptions
- Compounding occurs monthly with an effective monthly rate `annualRate/12`.
- Daily recurring contributions are batched monthly as `amountPerDay * daysInMonth` using a 365-day calendar (no leap years): [31,28,31,30,31,30,31,31,30,31,30,31]. These are applied at the start of each month.
- Monthly/yearly recurring contributions are applied either at the start or end of their period depending on `contributionTiming`.
- One-time contributions are applied at the start of their target month (0-based month index).
- All rates are decimal (e.g., `0.07` for 7%).
- Amounts are in plain currency units and results are rounded to 2 decimals for reporting.

## Build & Run

Requires Go 1.21+

```bash
# from project root
go run ./cmd/server
# server listens on :8080
```

## Endpoint
- POST `/api/v1/compound`
- Content-Type: `application/json`

### Request JSON
```json
{
  "initialPrincipal": 10000,
  "annualRate": 0.07,
  "totalMonths": 60,
  "contributionTiming": "start", // or "end"
  "recurring": [
    {"schedule": "monthly", "amount": 300, "startMonth": 0, "endMonth": -1},
    {"schedule": "yearly",  "amount": 1200, "startMonth": 0, "endMonth": -1},
    {"schedule": "daily",   "amount": 5,   "startMonth": 0, "endMonth": 23}
  ],
  "oneTime": [
    {"amount": 2000, "atMonth": 12}
  ]
}
```

- `totalMonths`: simulation horizon.
- `startMonth` inclusive; `endMonth` inclusive. Use `-1` for no end (until horizon).
- `daily.amount` is per-day amount.

### Response JSON (excerpt)
```json
{
  "monthly": [
    {"month":0,"principal":10310.00,"interest":60.83,"balance":10370.83},
    {"month":1,"principal":10620.00,"interest":61.93,"balance":10681.93}
  ],
  "yearly": [
    {"year":1,"principal":... ,"interest":...,"balance":...},
    {"year":2,"principal":... ,"interest":...,"balance":...}
  ],
  "totals": {"principal": ..., "interest": ..., "balance": ...}
}
```

## Testing

```bash
go test ./...
```

The unit tests cover:
- No contributions (pure compounding)
- Monthly contributions with start vs. end timing
- Daily contributions batched by days in month
- Yearly contributions with start vs. end timing
- One-time contributions applied by month offset

## Notes
- If you need leap years or exact calendar date alignment, the daily batching logic can be adapted.
- For taxes/fees/inflation adjustments, extend the `internal/calculator` package without changing HTTP contract.
