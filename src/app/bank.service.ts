import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  

  constructor(private _httpClient:HttpClient) { }
  getAccount(id:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id)
  }
  getBank():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1")
  }
  getFilteredBank(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter="+term);
  }
  getPagedBank(page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page="+page);
  }
  getSortBank(colum:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy="+colum+"&order="+order);
  }
  createaccounts(data:any){
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals",data)
  }
editaccounts(id:string,data:any){
  return this._httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+id,data)
  }
  deleteBank(id:string){
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/"+id);
  }
}
