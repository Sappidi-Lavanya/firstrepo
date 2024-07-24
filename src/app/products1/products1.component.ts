import { Component, OnInit } from '@angular/core';
import { Common1Service } from '../common1.service';

@Component({
  selector: 'app-products1',
  templateUrl: './products1.component.html',
  styleUrls: ['./products1.component.css']
})
export class Products1Component implements OnInit {

  constructor(private _common1:Common1Service) { }

  ngOnInit(): void {
  }
  addCart(){
    this._common1.setValue();
  }

}
