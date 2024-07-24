import { Component, OnInit } from '@angular/core';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  public num1: any = null;
  public num2: any = null;
  

  constructor(private _calculatorService: CalculatorsService) {}

  ngOnInit(): void {}
  catch(value:any){
    this.num1=value;
    this.num2=value;

  }
}
