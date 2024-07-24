import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public age:number=20;
  public name:string='ABBCD';
  public isValid:boolean=true;
  
  public phone:string = "+91 "


  constructor() { }

  ngOnInit(): void {
  }
  upload(){
    alert("Upload Successfully")
  }

  send(){
    alert("Sending Success")
  }

  change(){
    alert("Data Changed")
  }


}


