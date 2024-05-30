import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  public weight:number=0;
  public height:number=0;
  public result:number=0;
  public r:string="";
  

bmi(){
  // var bmi= document.getElementById('result').innerText=parseInt(weight/((height/100)*(height/100)));
       this.result=Math.round(this.weight/((this.height/100)*(this.height/100)) )  ;   

if(this.result<=18.5)
  {
this.r="(under weight)";
}
else if(this.result<25&& this.result>18.5){
  this.r="(normal weight)";
}
else if(this.result<30&& this.result>25){
  this.r="(Over weight)";
}
else if(this.result<35&& this.result>30){
  this.r="(Obesity)";
}
else{
  this.r="(plaese enter correct inputs)";
}

}
}
