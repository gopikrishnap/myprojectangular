import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule , Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';




import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { HackerSharkComponent } from './hacker-shark/hacker-shark.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Appservices } from './app.services';

import { HttpClientModule } from '@angular/common/http';
import { Section1Component } from './section1/section1.component';









const routes : Routes = [
{ path: 'Home',component: HomeComponent},

{ path: 'about-us',component: AboutUsComponent},
{path: 'contact', component : ContactComponent},
{path:'register',component: RegisterComponent},
{path:'login',component: LoginComponent},
{ path:'signup', component: SignupComponent},

{ path: 'services', component : ServicesComponent,children:[
  { path : 'product-development' , component : ProductDevelopmentComponent },
  { path : 'hacker-shark' , component : HackerSharkComponent },
 
]}





]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
   
    LoginComponent,
    
    ProductDevelopmentComponent,
    HackerSharkComponent,
    ContactComponent,
    ServicesComponent,
    RegisterComponent,
    SignupComponent,
    Section1Component,
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [Appservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
