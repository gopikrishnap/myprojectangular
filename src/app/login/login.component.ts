import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Appservices } from '../app.services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loggedInUser: any;
  


  constructor(private appService: Appservices) { }



  ngOnInit() {

    this.loginForm = new FormGroup(
      {

        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required)
      }
    )
  }


  login() {
    if (this.loginForm.status == "INVALID") {
      alert("Please Enter Valid Credentials")
    }
    else {
      this.appService.loginuser(this.loginForm.value)
        .subscribe(
          (response) => {
            this.loggedInUser = response;
            console.log(response);
            localStorage.setItem('token', this.loggedInUser.userToken);
            localStorage.setItem('userId', this.loggedInUser.user._id);
            if (this.loggedInUser.status) {
              this.loggedInUser = this.loggedInUser.user;
            } else {
              alert(this.loggedInUser.message);
            }


          }

        )
    }
  }
}