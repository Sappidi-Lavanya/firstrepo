import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vechicle',
  templateUrl: './vechicle.component.html',
  styleUrls: ['./vechicle.component.css'],
})
export class VechicleComponent implements OnInit {
  constructor(private _vehicleService: VehicleService,private _router: Router) {
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
  
  view(id:string){
    this._router.navigateByUrl('/dashboard/vechicleDetails/'+id);

  }
  edit(id:string){
    this._router.navigateByUrl('/dashboard/editVehicle/'+id);

  }
  public vehicles: any = [];
  public term:string="";
  public page:number=1;
  public colum:string="";
  public order:string="";

  ngOnInit(): void {}
}
