import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  public names:string[]=[];
  public name:string="";
  public prefix:string="mr/ms."
  

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    this.names.push(this.name);
    this.name="";


  }
delete(i:number){
  this.names.splice(i,1);

}
deletelast(){
  this.names.pop();
}
deleteAll(){
  this.names=[];
}

increseaz(){
 this.names=this.names.sort();

}
decreseaz(){
  // this.names=this.names.sort();
  // this.names=this.names.reverse();
  this.names=this.names.sort().reverse();

}
salutation(){


// this.names=this.names.map(name=>this.prefix+name)

this.names=this.names.map(name=>"Mr."+name)

}
}
