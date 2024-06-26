import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl,
  })

  constructor( private _loginService :LoginService,private _router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login succesfull");
        //token store
        sessionStorage.setItem("mymap-token",data.token);
        //go to dashboard
        this._router.navigateByUrl('/dashboard')
      },
      (err:any)=>{
        alert("invalid credintials")
      }
    )
  }

}
