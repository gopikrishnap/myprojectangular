import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Appservices } from './app.services';

import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { DynamicComponent } from './about-us/dynamic/dynamic.component';//don't add this servicesmodule(from services.module.ts(export class name))
import { ServicesModule } from './services/services.module';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';



const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'About-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'About-us/:id', component: DynamicComponent },//about ids dynamicRouting
  { path: 'services', loadChildren: './services/services.module#ServicesModule' },
  { path: '', component: ImageCarouselComponent },

  // { path: 'services', component : ServicesComponent,children:[
  //   { path : 'product-development' , component : ProductDevelopmentComponent },
  //   { path : 'hacker-shark' , component : HackerSharkComponent }]}


]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    SignupComponent,
    FooterComponent,
    DynamicComponent,
    ImageCarouselComponent,
  ],


  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],


  providers: [Appservices],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
