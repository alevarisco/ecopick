import { Injectable } from '@angular/core';
import { Product} from '../../../core/classes/product/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMessageService } from '../process-http-message.service';
import { Observable } from 'rxjs';
import { serverURL } from '../../constants/serverURL';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  producto: Product = {
    descripcion: '',
    cantidad: 0,
    producto: '',
    fkPublica: 1,
    fkLugar: 1
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
}
