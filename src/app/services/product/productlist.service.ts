import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private http:HttpClient) { }

  url = 'https://fakestoreapi.com/products'
  geturl(){
    return this.http.get(this.url);
  }

  items:any = []
  senditem(value:any){
    this.items.push(value);
  }
}
