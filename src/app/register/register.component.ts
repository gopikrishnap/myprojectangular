import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: any;
  public email: any;
  public password: any;
  public number: any;
  public user: any;
  public mobile: any;

  public continue: any;
  

  constructor() { }
 

  ngOnInit() {
    // this.continue = "hello"
  }





  register() {
    if (!this.name) {
      alert("Please Enter Name");
    } else if (!this.email) {
      alert("Please Enter Email");
    } else if (!this.mobile) {
      alert("Please Enter mobile");
    } else if (!this.password) {
      alert("Please Enter Password");
    } else {
      this.user = {
        name: this.name,
        email: this.email,
        phone: +this.mobile,
        password: this.password
      };




    }

  }
  

}