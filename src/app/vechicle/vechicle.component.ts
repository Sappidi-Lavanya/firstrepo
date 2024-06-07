import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechicle',
  templateUrl: './vechicle.component.html',
  styleUrls: ['./vechicle.component.css'],
})
export class VechicleComponent implements OnInit {
  constructor(private _vehicleService: VehicleService) {
    _vehicleService.getVechicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('interanl server error');
      }
    );
  }
  filter(){
    this._vehicleService.getFilteredVechicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }
    )
  }
  pagination(){
    this._vehicleService.getPagedVechicles(this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }

    )
  }
  sort(){
    this._vehicleService.getSortVechicles(this.colum,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        console.log("Internal error");
      }

    )
  }
  delete(id:string){
    this._vehicleService.deleteVechicles(id).subscribe(
      (data:any)=>{
       alert("delete");
       location.reload();
      },
      (err:any)=>{
        alert("Internal error");
      }

    )
  }
  public vehicles: any = [];
  public term:string="";
  public page:number=1;
  public colum:string="";
  public order:string="";

  ngOnInit(): void {}
}
