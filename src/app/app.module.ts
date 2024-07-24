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
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmployeeComponent } from './employee/employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { VechicleDetailsComponent } from './vechicle-details/vechicle-details.component';
import { BankDetialsComponent } from './bank-detials/bank-detials.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { Products1Component } from './products1/products1.component';
import { Nav1Component } from './nav1/nav1.component';
import { Cart1Component } from './cart1/cart1.component';
import { RatingComponent } from './rating/rating.component';
import { TextareaComponent } from './textarea/textarea.component'
import { AboutUsModule } from './about-us/about-us.module';
import { ToDoComponent } from './to-do/to-do.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { WeDoComponent } from './we-do/we-do.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { CalculatorrComponent } from './calculatorr/calculatorr.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { OperatorsComponent } from './operators/operators.component';

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
    CreateAccountsComponent,
    CreateUserComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    VechicleDetailsComponent,
    BankDetialsComponent,
    ParentComponent,
    ChildComponent,
    CartComponent,
    NavComponent,
    Products1Component,
    Nav1Component,
    Cart1Component,
    RatingComponent,
    TextareaComponent,
    ToDoComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    WeDoComponent,
    C1Component,
    C2Component,
    C3Component,
    CalculatorrComponent,
    InputComponent,
    ResultComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
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

