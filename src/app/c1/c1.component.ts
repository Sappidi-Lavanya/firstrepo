import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SiblingService } from '../sibling.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
 public form1:FormGroup=new FormGroup({
  task:new FormControl(),
  date:new FormControl(),

 })

  constructor(private _sibling:SiblingService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.form1.value);
    this._sibling.setValue(this.form1.value);

  }

}
