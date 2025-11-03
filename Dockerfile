# Build stage
FROM golang:1.25 AS build
WORKDIR /app

# Cache deps
COPY go.mod ./
RUN go mod download

# Copy source
COPY . .

# Build static binary
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o /out/server ./cmd/server

# Runtime stage
FROM gcr.io/distroless/base-debian12:nonroot
WORKDIR /app

# Copy binary and web assets
COPY --from=build /out/server /app/server
COPY --from=build /app/web /app/web

EXPOSE 8080
USER nonroot:nonroot

ENTRYPOINT ["/app/server"]
