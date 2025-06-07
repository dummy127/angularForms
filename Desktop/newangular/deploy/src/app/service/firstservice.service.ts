import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class FirstserviceService {
  constructor(private HTTPcli:HttpClient) {}

  getProdcut():Observable<product[]>
  {

    return this.HTTPcli.get<product[]>("https://fakestoreapi.com/products")

  }
}
