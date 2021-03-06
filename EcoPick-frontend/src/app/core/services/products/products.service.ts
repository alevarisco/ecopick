import { Injectable } from '@angular/core';
import { Product} from '../../../core/classes/product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMessageService } from '../process-http-message.service';
import { Observable } from 'rxjs';
import { serverURL } from '../../constants/serverURL';
import { catchError } from 'rxjs/operators';
import { Respuesta } from '../../classes/respuesta';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  producto: Product = {
    descripcion: '',
    cantidad: 0,
    producto: '',
    fkPublica: 1,
    fkLugar: 1,
    fkReclama: 1,
    fechaPublicacion: '01/01/2021' ,
    status:0
  }
  constructor(private http: HttpClient,
    private processHTTPMessageService: ProcessHttpMessageService) { }

  postRegistrarProducto(producto: Product): Observable<Product>{
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post<Product>(serverURL + 'pedido/add', producto, httpOptions)
        .pipe(catchError(this.processHTTPMessageService.handleError))
  }

  getProducto(pid): Observable<Respuesta>{
    return this.http.get<Respuesta>(serverURL + 'pedido/' + pid)
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  putEditarProducto(producto: Product, id:Number): Observable<Respuesta>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Respuesta>(serverURL + 'pedido/edit/'+ id, producto, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError))
}

    deleteProducto(producto: Product, id:Number): Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Product>(serverURL + 'pedido/delete/'+ id, producto, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError))
  }
}
