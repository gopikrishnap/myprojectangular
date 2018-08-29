import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ServicesComponent } from './services.component';
import { ProductDevelopmentComponent } from './product-development/product-development.component';
import { HackerSharkComponent } from './hacker-shark/hacker-shark.component';



const routes: Routes = [

    // { path : 'services' , loadChildren : './services/services.module#ServicesModule' },
     { path: '', component: ServicesComponent ,pathMatch:'full' },
    { path: 'product-development', component: ProductDevelopmentComponent },
    { path: 'hacker-shark', component: HackerSharkComponent },
    // { path: '', redirectTo: '/services/hacker-shark', pathMatch: 'full' }
]
@NgModule({
    declarations: [
        ServicesComponent,
        ProductDevelopmentComponent,
        HackerSharkComponent
    ],
    imports: [
        CommonModule,
  
        RouterModule.forChild(routes),


    ],
    providers: [

    ]

})
export class ServicesModule { }
