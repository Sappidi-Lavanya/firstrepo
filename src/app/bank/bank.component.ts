import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor( private _bankService:BankService,private _router:Router) { 
_bankService.getBank().subscribe(
  (data:any)=> {
    this.accounts= data;
  },
  (err:any)=>{
    alert('internal server error')
  }
);
  }

  filter(){
    this._bankService.getFilteredBank(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }
    )
  }
  pagination(){
    this._bankService.getPagedBank(this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }

    )
  }
  sort(){
    this._bankService.getSortBank(this.colum,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }

    )
  }
  delete(id:string){
    this._bankService.deleteBank(id).subscribe(
      (data:any)=>{
       alert("delete");
       location.reload();
      },
      (err:any)=>{
        alert("Internal error");
      }

    )
  }
  view(id:string){
    this._router.navigateByUrl('/dashboard/bankDetails/'+id);

  }
  edit(id:string){
    this._router.navigateByUrl('/dashboard/editAccount/'+id);
  }

  public accounts: any=[];
  public term:string="";
  public page:number=1;
  public colum:string="";
  public order:string="";

  ngOnInit(): void {
  }

}
