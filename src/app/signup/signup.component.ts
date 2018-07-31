import { Component, OnInit } from '@angular/core';
import { Appservices } from '../app.services';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: String;
  age: Number;
  email: String;
  gender: String = "";
  designation: String;
  bloodGroup: String;
  profilePic: String;
  mobile: String
  public employeeDetails: any;


  public createdEmployeeDetails: any;


  constructor(private appservices: Appservices) { }



  createEmployee() {
    this.employeeDetails = {
      name: this.name,
      age: this.age,
      email: this.email,
      gender: this.gender,
      designation: this.designation,
      bloodGroup: this.bloodGroup,
      profilePic: this.profilePic,
      mobile: this.mobile
    }


    this.appservices.AddEmploye(this.employeeDetails)
      .subscribe(
        (employee) => {
          this.createdEmployeeDetails = employee;
          alert(this.createdEmployeeDetails.message);
          /////////////////////////////////////
          this.getEmployeeList();//back end get      
          ///////////////////////////////////
        },
        (error) => {
          this.createdEmployeeDetails = error;
          alert(this.createdEmployeeDetails.message)
        }
      )
  }
  ngOnInit() { }

  signup() {
    if (!this.name) {
      alert("Please Enter Name");
    } else if (!this.age) {
      alert("Please Enter age");
    } else if (!this.email) {
      alert("Please Enter email");
    }
    else if (!this.gender) {
      alert("Please choose gender");
    }
    else if (!this.designation) {
      alert("Please Enter desigination");
    }
    else if (!this.bloodGroup) {
      alert("Please Enter bloodgroup ");

    }
    else if (!this.profilePic) {
      alert("Please uplode your photo ");

    }
    else if (!this.mobile) {
      alert("Please Enter number");
    }

    else (this.appservices.AddEmploye(this.employeeDetails));{
      alert("successfully submited");

    }



  }
  //back end get

  getEmployeeList() {
    this.appservices.getemployye();
  }

}





