package main

import (
	"fmt"
	"net/http"
	"vpn-tester/controllers"
)




func main(){

    // setup a file server to the static files
    viewsFileServer := http.FileServer(http.Dir("./views"))
    http.Handle("/views/", http.StripPrefix("/views/", viewsFileServer))

    scriptsFileServer := http.FileServer(http.Dir("./scripts"))
    http.Handle("/scripts/", http.StripPrefix("/scripts/", scriptsFileServer))

    cssFileServer := http.FileServer(http.Dir("./css"))
    http.Handle("/css/", http.StripPrefix("/css/", cssFileServer))

    // setup a server with our controllers
    http.HandleFunc("/", controllers.HomeController)
    http.HandleFunc("/home", controllers.HomeController)
    
    // output a server running message
    fmt.Println("Server running on port 3000")    

    // listen and server
    err:= http.ListenAndServe(":3000", nil)
    if err != nil {
        fmt.Println("Error on server launch", err)
    }
}
