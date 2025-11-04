# interest-compounder

Demo (online): https://interest-compounder-495033672529.europe-west1.run.app/

Public Go HTTP API and web UI for simulating compound interest across multiple calculations, with recurring and one‑time contributions. Returns monthly and yearly series ready for charts. Multi‑calc output is stackable (principal + interest) with per‑calculation currency and naming.

Note: The web UI stores your repository/calculation data only locally in your browser (local storage). No data is sent to any backend for persistence.

## Features
- Batch endpoint: send multiple calculations in one request (`calculations[]`).
- Recurring schedules: `daily`, `monthly`, `yearly`; one‑time injections.
- Timing: start/end of period for monthly/yearly recurring.
- Monthly compounding; daily batched by month length [31,28,31,30,31,30,31,31,30,31,30,31] (no leap years).
- Web UI (Chart.js + Ace), CS/EN i18n, per‑calculation currency and name.

## Requirements
- Go 1.21+ (tested with Go 1.25)
- Optional: Docker / Docker Desktop

## Run locally (Go)
```bash
# from project root
go run ./cmd/server
# server listens on :8080
# open http://localhost:8080 for the web UI
```

## Run with Docker
### Windows (Docker Desktop)
```powershell
# Build image
docker build -t cz-jcode/interest-compounder:local .
# Run container mapping port 8080
docker run --rm -p 8080:8080 cz-jcode/interest-compounder:local
# Open http://localhost:8080
```

### Linux (Docker Engine)
```bash
# Build image
docker build -t cz-jcode/interest-compounder:local .
# Run container
docker run --rm -p 8080:8080 cz-jcode/interest-compounder:local
```

## Docker Compose
```bash
docker compose up --build
# or (older) docker-compose up --build
```

## API
- POST `/api/v1/compound`
- Content-Type: `application/json`

### Request JSON (Batch)
```json
{
  "calculations": [
    {
      "name": "A",
      "currency": "CZK",
      "initialPrincipal": 10000,
      "annualRate": 0.07,
      "totalMonths": 60,
      "recurring": [
        {"schedule": "monthly", "amount": 300, "startMonth": 0, "endMonth": -1},
        {"schedule": "yearly",  "amount": 1200, "startMonth": 0, "endMonth": -1},
        {"schedule": "daily",   "amount": 5,   "startMonth": 0, "endMonth": 23}
      ],
      "oneTime": [ {"amount": 2000, "atMonth": 12} ]
    },
    { "name": "B", "currency": "EUR", "initialPrincipal": 5000, "annualRate": 0.05, "totalMonths": 36,
      "recurring": [], "oneTime": [] }
  ]
}
```

- `totalMonths` ≥ 1; `startMonth` and `endMonth` are inclusive; use `-1` for open‑ended.
- `daily.amount` is per‑day; batched by month length.

### Response JSON (Batch)
```json
{
  "results": [
    {
      "request": {
        "name": "A",
        "currency": "CZK",
        "initialPrincipal": 10000,
        "annualRate": 0.07,
        "totalMonths": 60,
        "recurring": [],
        "oneTime": []
      },
      "response": {
        "monthly": [ {"month":0, "principal":10310.0, "interest":60.83, "balance":10370.83} ],
        "yearly":  [ {"year":1, "principal":10620.0, "interest":122.76, "balance":10681.93} ],
        "totals":  {"principal":10620.0, "interest":122.76, "balance":10681.93}
      }
    }
  ]
}
```

## Testing
```bash
go test ./...
```

## Versioning
- Semantic Versioning (SemVer): MAJOR.MINOR.PATCH
- Starting at `v0.1.0` while the API evolves; breaking changes will bump MAJOR (to `v1.0.0` and higher).
- Tags will be created on GitHub releases.

## License
MIT — see `LICENSE`.

## Links
- Repo: https://github.com/cz-jcode/interest-compounder


## Troubleshooting Docker/Compose on Windows
If `docker compose up --build` fails with an error like:
```
unable to get image 'cz-jcode/interest-compounder:local': error during connect: Get "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/...": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
```
It means Docker Engine is not running (Docker Desktop is stopped or not installed), or the terminal didn’t pick up PATH changes after installing Docker/GitHub CLI.

Follow these steps:
1) Start Docker Desktop
   - Click Start → search "Docker Desktop" → run it. Wait until the whale icon says "Docker Desktop is running".
2) Open a NEW PowerShell window (so that PATH/env are refreshed)
3) Verify Docker is up:
   ```powershell
   docker version
   docker info
   ```
   Both commands should succeed without errors.
4) Now build and run with Docker or Compose:
   ```powershell
   # Build & run image directly
   docker build -t cz-jcode/interest-compounder:local .
   docker run --rm -p 8080:8080 cz-jcode/interest-compounder:local

   # Or with Compose (from project root)
   docker compose up --build
   ```

Additional notes:
- If you use WSL 2, ensure Docker Desktop → Settings → General → "Use the WSL 2 based engine" is enabled.
- If you just installed Docker Desktop, a full Windows sign-out or terminal restart may be needed for PATH/daemon integration.
- On corporate networks, verify proxy settings if pulls fail for other reasons.
