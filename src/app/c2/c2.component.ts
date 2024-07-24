import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  public to:any=[];

  constructor(private sibling:SiblingService) {
    sibling.getValue().subscribe(
      (data:any)=>{
        this.to=data;
      }
    )
   }

  ngOnInit(): void {
  }
  delete(){

  }
  view(){

  }
  edit(){

  }

}
