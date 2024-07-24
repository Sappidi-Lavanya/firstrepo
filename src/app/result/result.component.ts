import { Component, OnInit } from '@angular/core';
import { CalculatorsService } from '../calculators.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result:any=null;

  constructor(private _calaculatorService:CalculatorsService) { 
    _calaculatorService.getValue().subscribe(
      (data:any)=>{
        this.result=data;
      }
    )
  }

  ngOnInit(): void {
  }

}
