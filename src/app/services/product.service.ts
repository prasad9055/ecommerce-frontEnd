import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl ='http://localhost:8080/api/products?size=100';

  constructor(private httpCLient:HttpClient) { }

getProductList(theCategoryId:number):Observable<Product[]>{
//Todo Implement Some releated to category id
  return this.httpCLient.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.products));
}

}

interface GetResponse {
  _embedded:{
    products:Product[];
  }
}