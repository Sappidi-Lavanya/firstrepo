


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  public num: number =0;
  public result: number = 0;
  public num1: number = 0;
  public result1:string ="";


  constructor() { }

  ngOnInit(): void {
  }

  sumDigit(): void {
    let tempNum = this.num;
    this.result = 0; // Reset result to 0 before calculating

    while (tempNum > 0) {
      this.result += tempNum % 10; // Add the last digit to result
      tempNum = Math.floor(tempNum / 10); // Remove the last digit
    }
  }
  evenCheck():void{
    if (this.num1 % 2 === 0) {
      this.result1 = `${this.num1} is even`;
    } 
     else {
      this.result1 = `${this.num1} is not  even number`;
    }

  }
}
