import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appservices } from '../app.services';
import { ActivatedRoute, Router } from '@angular/router';

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
  public userDetails: any;



  constructor(private appService: Appservices,
    private router: Router) { }


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

      this.appService.register(this.user)
        .subscribe(
          (response) => {
            this.userDetails = response;
            if (this.userDetails.status) {
              this.router.navigate(['/login'])
            } else {
              alert(this.userDetails.message);
            }
          }
        )



    }


  }
}