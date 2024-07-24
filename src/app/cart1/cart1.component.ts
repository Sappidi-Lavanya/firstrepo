import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.css']
})
export class Cart1Component implements OnInit {
  public cartCount:number=0;

  constructor(private _commonService:Common1Service) {
    _commonService.getValue().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
   }

  ngOnInit(): void {
  }

}
