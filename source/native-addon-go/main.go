package main

import (
	"C"

	"github.com/getsentry/sentry-go"
)

//export example
func example() {}

func main() {
	sentry.Init(sentry.ClientOptions{
		Dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
		Release:     "zsb-rybnik@1.0.0",
		Debug: true,
		TracesSampleRate: 1.0,
	})
}
