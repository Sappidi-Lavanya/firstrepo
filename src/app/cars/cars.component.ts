import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
 public companies:string='companies';
  constructor() { }

  ngOnInit(): void {
  }
  
  }

