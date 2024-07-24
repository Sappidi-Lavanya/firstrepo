import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Common2Service {
  public todoList: any = [];
  public todoview:any=[];
  
  public todoListsub: BehaviorSubject<any> = new BehaviorSubject([]);
  public todoViewsub: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  setTodo(todo: any) {
    this.todoList.push(todo);
    this.todoListsub.next(this.todoList);
  }

  getTodos(){
    return this.todoListsub;
  }

  // view 

  setview(todo:any){
    this.todoview.push(todo)
    this.todoViewsub.next(this.todoList);

  }
  getView(){
    return this.todoViewsub;
  }
}
 
