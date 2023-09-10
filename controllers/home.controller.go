package controllers

import "net/http"


func HomeController(res_writer http.ResponseWriter, req_pointer *http.Request){
    http.Redirect(res_writer, req_pointer, "/views/home.html", http.StatusSeeOther)  
}
