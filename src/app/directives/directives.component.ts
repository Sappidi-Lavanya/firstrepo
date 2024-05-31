import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public ages:number[]=[10,20,30,4,0,50];
  public states:string[]=['telangana',"andhra","kerala"];

  //arrray of objects


  public products:any=[
    {name:'pen',price:10,rating:3},
    {name:'laptop',price:2000,rating:5},
    {name:'tv',price:5344,rating:3}
  ]

  public employees:any=[
    {name:"me",company:"TCs",exp:3},
    {name:"its me",company:"wipro",exp:4},
    {name:"lavanya",company:"capgemini",exp:2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
