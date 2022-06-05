package main

import (
	"fmt"
	"net/http"
)

// func home_page(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Go is ibcradible")
// }

// func article_page(w http.ResponseWriter, r *http.Request) {
// 	fmt.Fprintf(w, "Articles")
// }

func main() {
	fmt.Print("Hello word!")
	http.HandleFunc()
}
