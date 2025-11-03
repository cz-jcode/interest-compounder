package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"example.com/compoundapi/internal/calculator"
)

type BatchRequest struct {
	Calculations []calculator.Request `json:"calculations"`
}

type BatchResult struct {
	Request  calculator.Request  `json:"request"`
	Response calculator.Response `json:"response"`
}

type BatchResponse struct {
	Results []BatchResult `json:"results"`
}

func writeJSON(w http.ResponseWriter, status int, v any) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(v)
}

func computeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		w.Header().Set("Allow", http.MethodPost)
		writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "only POST is allowed"})
		return
	}
	var breq BatchRequest
	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()
	if err := dec.Decode(&breq); err != nil {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid JSON: " + err.Error()})
		return
	}
	if len(breq.Calculations) == 0 {
		writeJSON(w, http.StatusBadRequest, map[string]string{"error": "calculations must be a non-empty array"})
		return
	}
	resp := BatchResponse{Results: make([]BatchResult, 0, len(breq.Calculations))}
	for i, it := range breq.Calculations {
		if it.TotalMonths <= 0 {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": fmt.Sprintf("calculation %d: totalMonths must be > 0", i)})
			return
		}
		res, err := calculator.Compute(it)
		if err != nil {
			writeJSON(w, http.StatusBadRequest, map[string]string{"error": fmt.Sprintf("calculation %d: %v", i, err)})
			return
		}
		resp.Results = append(resp.Results, BatchResult{Request: it, Response: res})
	}
	writeJSON(w, http.StatusOK, resp)
}

func main() {
	// API endpoint
	http.HandleFunc("/api/v1/compound", computeHandler)

	// Static web UI served from ./web
	webDir := "web"
	if _, err := os.Stat(webDir); err == nil {
		fs := http.FileServer(http.Dir(webDir))
		// Serve index.html at root and other assets by path
		http.Handle("/", fs)
		log.Printf("serving static UI from ./%s", webDir)
	} else {
		log.Printf("warning: static UI directory ./%s not found", webDir)
	}

	addr := ":8080"
	log.Printf("compound API listening on %s", addr)
	log.Fatal(http.ListenAndServe(addr, nil))
}
