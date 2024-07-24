import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pizzaa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizzaa.component.html',
  styleUrls: ['./pizzaa.component.css']
})
export class PizzaaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
