package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/user", handleUserRequest)
	fmt.Println("Starting server on :8082")
	http.ListenAndServe(":8082", nil)
}

func handleUserRequest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	name := r.URL.Query().Get("name")
	if name == "" {
		http.Error(w, "Name parameter is required", http.StatusBadRequest)
		return
	}

	fmt.Fprintf(w, "Hello, %s!", name)
}
