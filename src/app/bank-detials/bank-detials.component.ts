import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-bank-detials',
  templateUrl: './bank-detials.component.html',
  styleUrls: ['./bank-detials.component.css']
})
export class BankDetialsComponent implements OnInit {
  public account:any={};

  constructor(private _activateRoute:ActivatedRoute,private _bankService:BankService) { 
    _activateRoute.params.subscribe(
      (data:any)=>{
        _bankService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          }
        )
      }
    )
  }

  ngOnInit(): void {
  }

}
