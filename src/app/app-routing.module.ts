import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',component:DashboardComponent, children:[
        {path:'welcome',component:WelcomeComponent},
        {path:'home',component:HomeComponent},
        {path:'data-binding',component:DataBindingComponent},
        {path:'calculator',component:CalculatorComponent},
        {path:'rectangle',component:RectangleComponent},
        {path:'circle',component:CircleComponent},
        {path:'bmi',component:BmiComponent},
        {path:'operations',component:OperationsComponent}

    ]},
    {path:'',component:LoginComponent},
    {path:'**',component: PagenotfoundComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
