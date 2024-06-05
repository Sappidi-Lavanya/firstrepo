import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public names:string="";
  public marks:number=0;
  public fee:number=0;

  public students:any=[
    {name:"sony", marks: 85, fee: 50000}, 
    {name:"sweethy", marks: 65, fee: 50000},
    {name:"shaillu", marks: 75, fee: 50000}  
  ]
  constructor() { }
  ngOnInit(): void {
  }
 register(){
  let student:any={
    name:this.names,
    marks:this.marks,
    fee:this.fee,
  }
  this.students.push(student);
  this.names='';
  this.marks=0;
  this.fee=0;
 }
 delete(i:number){
  this.students.splice(i,1);

}

  
}