import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingService {
  public todoList:any=[];
  public todoListSub:BehaviorSubject<any>=new BehaviorSubject([]);

  constructor() { }
  setValue(data:any){
    this.todoList.push(data);
    this.todoListSub.next(this.todoList);
   

  }
  getValue(){
    return this.todoListSub;

  }
}
