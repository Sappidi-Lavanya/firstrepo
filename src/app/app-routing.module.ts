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
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';
import { CarsComponent } from './cars/cars.component';
import { PipesComponent } from './pipes/pipes.component';
import { SmartshopingComponent } from './smartshoping/smartshoping.component';
import { DiceComponent } from './dice/dice.component';
import { VechicleComponent } from './vechicle/vechicle.component';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { PhotoComponent } from './photo/photo.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { AuthenthificationGuard } from './authenthification.guard';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'dashboard',canActivate:[AuthenthificationGuard],component:DashboardComponent, children:[
        {path:'welcome',component:WelcomeComponent},
        {path:'home',component:HomeComponent},
        {path:'data-binding',component:DataBindingComponent},
        {path:'calculator',component:CalculatorComponent},
        {path:'rectangle',component:RectangleComponent},
        {path:'circle',component:CircleComponent},
        {path:'bmi',component:BmiComponent},
        {path:'operations',component:OperationsComponent},
        {path:'directives',component:DirectivesComponent},
        {path:'registration',component:RegistrationComponent},
        {path:'students',component:StudentsComponent},
        {path:'cars',component:CarsComponent},
        {path:'pipes',component:PipesComponent},
        {path:'smartshoping',component:SmartshopingComponent},
        {path:'dice',component:DiceComponent},
        {path:"vehicle",component:VechicleComponent},
        {path:"bank",component:BankComponent},
        {path:"flipkart",component:FlipkartComponent},
        {path:"email",component:EmailComponent},
        {path:"photo",component:PhotoComponent},
        {path:"createvechicle",component:CreateVechicleComponent},
        {path:"createaccounts",component:CreateAccountsComponent}

    ]},
    {path:'',component:LoginComponent},
    {path:'**',component: PagenotfoundComponent},
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
