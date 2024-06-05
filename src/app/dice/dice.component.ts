import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  public number: number = 0;
  public p: number = 0;

  constructor() { }

  ngOnInit(): void { }

  roll(): void {
    this.number = Math.floor(Math.random() * 6) + 1;
  }

  press(): void {
    this.p = 1;
  }
}

