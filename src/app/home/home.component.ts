import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public continue: any;
  public show: any;
  public hide: any;

  public names = ['prabhas', 'mahesh', 'pavan'];

  public employees = [

    {
      name: "mahesh",
      age :40
    },
    {
      name: "mahesh",
      age :43
    },
    {
      name: "pavan",
      age :50
    }
  ]

  ngOnInit() {
    this.continue = true;
    this.show =true;
    this.hide =true;
  }
  Content() {

    this.continue = !this.continue;
  }
  shContent(){
    this.show=!this.show;
  }

  showContent() {

    this.hide = !this.hide;
  }




  callNgClass(){

    if( this.hide){ 
      return "hello";}
    else{
      return "demo";
    }

  }
}
