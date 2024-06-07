import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsComponent } from './operations/operations.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentsComponent } from './students/students.component';
import { CarsComponent } from './cars/cars.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { SmartshopingComponent } from './smartshoping/smartshoping.component';
import { ProductsComponent } from './products/products.component';
import { DiceComponent } from './dice/dice.component';
import { VechicleComponent } from './vechicle/vechicle.component';
import{HttpClientModule} from '@angular/common/http';
import { BankComponent } from './bank/bank.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { PhotoComponent } from './photo/photo.component';
import { CreateVechicleComponent } from './create-vechicle/create-vechicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    OperationsComponent,
    DirectivesComponent,
    RegistrationComponent,
    StudentsComponent,
    CarsComponent,
    PipesComponent,
    BalancePipe,
    SmartshopingComponent,
    ProductsComponent,
    DiceComponent,
    VechicleComponent,
    BankComponent,
    FlipkartComponent,
    EmailComponent,
    PhotoComponent,
    CreateVechicleComponent,
    CreateAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// imports: [
//   BrowserModule,
//   AppRoutingModule,
//   FormsModule
// ],
// providers: [],
// bootstrap: [AppComponent]
// })
// export class AppModule { }

