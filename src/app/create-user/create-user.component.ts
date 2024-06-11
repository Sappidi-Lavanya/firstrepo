import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    address: new FormGroup({
      hno: new FormControl(),
      city: new FormControl(),
      pincode: new FormControl(),
    }),
    type: new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl()
    cards: new FormArray([]),
  });
  get cardsFormArray() {
    return this.userForm.get('cards') as FormArray;
  }
  addcart() {
    this.cardsFormArray.push(
      new FormGroup({
        number: new FormControl(null,[Validators.required,Validators.min(100000000),Validators.max(9999999999)]),
        expire: new FormControl(),
        cvv: new FormControl(),
      })
    );
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);

  }
 

  constructor() {
    this.userForm.get('type')?.valueChanges.subscribe((data: any) => {
      if (data == 'dayScholor') {
        this.userForm.addControl('busfee', new FormControl());
        this.userForm.removeControl('hostelfee');
      } else if (data == 'residential') {
        this.userForm.addControl('hostelfee', new FormControl());
        this.userForm.removeControl('busfee');
      }
    });
  }

  ngOnInit(): void {}
  submit() {
    console.log(this.userForm);
  }
  
}
