import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: object[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get('http://localhost:8080/servicio-1.0.0/pedido/');
  }
}
