package main

// некоторые импорты нужны для проверки
import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/getMessage", handleGetRequest)
	fmt.Println("Server started on :8081")
	http.ListenAndServe(":8081", nil)
}

func handleGetRequest(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	fmt.Fprint(w, "Hello, web!")
}
