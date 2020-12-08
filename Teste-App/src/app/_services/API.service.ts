import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl: string = 'https://apiprod.mais.com.br/api/ProductSale/FindAllProductsByStore/geisa';
  body: string = '{"search_name":"","page":{"limit": 12,"page":1	}}';
  header = new HttpHeaders({
    "Content-type": "application/json",
    "x-server-origin":"uslands.shop"
  });
  
  getAPI(): Observable<string>{
    return this.http
        .post<string>(this.baseUrl,
          this.body, {
            headers: this.header
          });
  }

  constructor(private http: HttpClient) {
  }

}
