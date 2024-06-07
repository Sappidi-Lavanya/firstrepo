import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vechicle',
  templateUrl: './create-vechicle.component.html',
  styleUrls: ['./create-vechicle.component.css']
})
export class CreateVechicleComponent implements OnInit {
  public  vechileForm:FormGroup=new FormGroup({
    Vechicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),



  })

  constructor(private _VehicleService: VehicleService) { }

  ngOnInit(): void {
  }
  create(){
    console.log(this.vechileForm);
    this._VehicleService.crateVehicles(this.vechileForm.value).subscribe(
      (data:any)=>{
        alert("succussfully created");
       
      },
      (err:any)=>{
        alert("internal error");
      }

    )
  }

}
