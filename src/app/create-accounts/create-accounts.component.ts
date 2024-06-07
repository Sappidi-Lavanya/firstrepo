import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-create-accounts',
  templateUrl: './create-accounts.component.html',
  styleUrls: ['./create-accounts.component.css']
})
export class CreateAccountsComponent implements OnInit {

  public accountsForm:FormGroup=new FormGroup({
    account_name:new FormControl(),
    avaialable_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    id:new FormControl()

  })


  constructor(private _bankService:BankService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.accountsForm)
    this._bankService.createaccounts(this.accountsForm.value).subscribe(
      (data:any)=>{
        alert("created succssfully!!!!");
      location.reload();
    },
    (err:any)=>{
      alert("created failed!!!!!");
   })
  }
}


