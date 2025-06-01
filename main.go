package main

import (
	"fmt"
	"net/http"
	"os"
	"vpn-tester/controllers"
)




func main(){

    // setup a file server to the static files
    viewsFileServer := http.FileServer(http.Dir("./views"))
    http.Handle("/views/", http.StripPrefix("/views/", viewsFileServer))

    publicFileServer := http.FileServer(http.Dir("./public"))
    http.Handle("/", publicFileServer)


    scriptsFileServer := http.FileServer(http.Dir("./scripts"))
    http.Handle("/scripts/", http.StripPrefix("/scripts/", scriptsFileServer))

    cssFileServer := http.FileServer(http.Dir("./css"))
    http.Handle("/css/", http.StripPrefix("/css/", cssFileServer))

    // setup a server with our controllers
    http.HandleFunc("/", controllers.HomeController)
    http.HandleFunc("/home", controllers.HomeController)
    
    // output a server running message
    fmt.Println("Server running on port 3000")    

    // get the port from the envirement if any
    port:= os.Getenv("PORT")

    // otherwise set a default
    if len(port) == 0 {
        port = "3000"
    }

    // listen and server
    err:= http.ListenAndServe(":"+port, nil)
    if err != nil {
        fmt.Println("Error on server launch", err)
    }
}
