import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../common2.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
  
  public views:any=[];
  

  constructor(private _common: Common2Service) {
   _common.getView().subscribe(
    (data:any)=>{
      this.views=data;
    }
   ) 
  }

  ngOnInit(): void {
  }

 
}
