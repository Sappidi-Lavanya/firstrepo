import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private _httpClent:HttpClient) { }
  getflipkart():Observable<any>{
    return this._httpClent.get("https://fakestoreapi.com/products")

  }
}
