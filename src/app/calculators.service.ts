import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorsService {
 
  public resultSub:BehaviorSubject<any>=new BehaviorSubject(null);

  constructor() { }
  setValue(data:any){
    this.resultSub.next(data);

  }
  getValue(){
    return this.resultSub;
  }


}
