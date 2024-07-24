import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../common2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  public lists:any=[];
  

  constructor(private _common: Common2Service) {
   _common.getTodos().subscribe(
    (data:any)=>{
      this.lists=data;
    }
   ) 
  }

  ngOnInit(): void {
  }
  view(i:any){
    this._common.setview(this.lists[i]);
   
  }

  edit(){

  }
  delete(){

  }

  
}
