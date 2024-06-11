import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vechicle-details',
  templateUrl: './vechicle-details.component.html',
  styleUrls: ['./vechicle-details.component.css']
})
export class VechicleDetailsComponent implements OnInit {
  // public vehicle:any={"Vehicle":"Dodge Escalade","manufacturer":"Chrysler","model":"Silverado","type":"Passenger Van","fuel":"Electric","color":"red","image":"https://loremflickr.com/640/480/nightlife","cost":"672.00","id":"1"}
  public vehicle:any={};
  

  constructor( private _activateRoute:ActivatedRoute,private _vehicleService:VehicleService) {
    _activateRoute.params.subscribe(
      (data:any)=>{
       _vehicleService.getVechicle(data.id).subscribe(
        (data:any)=>{
          this.vehicle=data;
        }
       )
       
      }
    )
   }

  ngOnInit(): void {
  }

}
