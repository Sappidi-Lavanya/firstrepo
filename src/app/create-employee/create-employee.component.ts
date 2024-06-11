import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;

  constructor() {
    // Initializing the form with form controls and validators
    this.employeeForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required, 
        Validators.minLength(3), 
        Validators.maxLength(10)
      ]),
      phone: new FormControl(null, [
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(10)
      ]),
      experience: new FormGroup({
        company: new FormControl(null),
        experience: new FormControl(null, Validators.min(0)),  // Validator for non-negative experience
        package: new FormControl(null, Validators.min(0))      // Validator for non-negative package
      }),
      type: new FormControl(null)
    });

    // Subscribing to changes in the 'type' control to dynamically add/remove controls
    this.employeeForm.get('type')?.valueChanges.subscribe((data: any) => {
      if (data === 'internal') {
        this.employeeForm.addControl('projectManager', new FormControl(null));
        this.employeeForm.removeControl('clientProject');
      } else if (data === 'external') {
        this.employeeForm.addControl('clientProject', new FormControl(null));
        this.employeeForm.removeControl('projectManager');
      }
    });
  }

  ngOnInit(): void { }

  // Method to handle form submission
  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
      this.employeeForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  // Getter method to access the nested 'experience' form group
  get experienceForm() {
    return this.employeeForm.get('experience') as FormGroup;
  }
}
