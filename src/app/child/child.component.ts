 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 @Input() public ac:string="";
 public bc:string="";
 // step1 create
 @Output() public bEvent:EventEmitter<string>=new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  //step 2 emit
  send(){
    this.bEvent.emit(this.bc);
  }

}
