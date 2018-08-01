import { Injectable } from "@angular/core";
// import { Http } from "@angular/http"
import { HttpClient } from "@angular/common/http";
// import { environment } from "../environments/environment";


@Injectable()


export class Appservices{
    constructor( private http: HttpClient ) { }





    // public serverUrl = environment.serverUrl;



    register(userDetails) {
        
        return this.http.post("http://localhost:3500/v1/user/signup", userDetails)
    }
    

    loginuser(details) {
    
        return this.http.post("http://localhost:3500/v1/user/login" , details)

}
    AddEmploye(employee){

        return this.http.post("http://localhost:3500/v1/user/addEmployee",employee)
    
    }
    getemployye(){
        return this.http.get("http://localhost:3500/v1/user/getEmployee")
    }
   
}


