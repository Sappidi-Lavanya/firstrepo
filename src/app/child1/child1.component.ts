import { Component, OnInit } from '@angular/core';
import { Common2Service } from '../common2.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public childForm:FormGroup=new FormGroup({  
    task:new FormControl(),
    date:new FormControl(),

  })
 

  constructor(private _common: Common2Service) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.childForm.value);
    this._common.setTodo(this.childForm.value);

  }

 
}

