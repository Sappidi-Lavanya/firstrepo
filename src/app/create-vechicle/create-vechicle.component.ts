import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vechicle',
  templateUrl: './create-vechicle.component.html',
  styleUrls: ['./create-vechicle.component.css']
})
export class CreateVechicleComponent implements OnInit {
  public  vechileForm:FormGroup=new FormGroup({
    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl(),



  })
  public id:string="";

  constructor(private _VehicleService: VehicleService,private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
       _VehicleService.getVechicle(data.id).subscribe(
        (data:any)=>{
          this.vechileForm.patchValue(data);
        }
       )
      }
    )
   }

  ngOnInit(): void {
  }
  create(){
    console.log(this.vechileForm);
    if(this.id){
      //edit
      this._VehicleService.editVehicles(this.id,this.vechileForm.value).subscribe(
        (data:any)=>{
          alert("succussfully edited");
         
        },
        (err:any)=>{
          alert("internal error");
        }
        
      )
    }
    else{
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

}
