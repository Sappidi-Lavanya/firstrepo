import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public count:number=0;
  //creating a subject
  public countSub:BehaviorSubject<number>=new BehaviorSubject(0);



  constructor() { }
  //to set 
  setValue(){
    this.count=this.count+1;
    this.countSub.next(this.count);

  }
  //to get
  getValue(){
    return this.countSub;
  }
}
