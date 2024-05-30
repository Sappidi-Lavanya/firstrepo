import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  constructor() { }
  public radius:number=0;
  public result:number=0;

  ngOnInit(): void {
  }
  area(){
    // radius*radius)*3.14
    this.result=(this.radius*this.radius)*3.14;
  }
  perimeter(){
    // 2*3.14*radius;
    this.result=(this.radius)*3.14*2;
  }

}
