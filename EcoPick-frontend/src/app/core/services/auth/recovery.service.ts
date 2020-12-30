import { Injectable } from '@angular/core';
import { Recovery } from '../../classes/auth/recovery';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMessageService } from '../process-http-message.service';
import { Observable } from 'rxjs';
import {serverURL} from '../../constants/serverURL';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {

  correo: String;
  respuesta: String;

  constructor(private http: HttpClient,
              private processHTTPMessageService: ProcessHttpMessageService) { }

  validateEmail(recovery: Recovery): Observable<Recovery>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Recovery>(serverURL + 'recovery/' + recovery.correo, recovery, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }

  getPreguntas(): Observable<Recovery[]>{
    return this.http.get<Recovery[]>(serverURL + 'recovery/questions')
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }
  
  validateAnswer(recovery: Recovery): Observable<Recovery>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Recovery>(serverURL + 'recovery/' + recovery.correo + '/'+ recovery.respuesta, recovery, httpOptions)
      .pipe(catchError(this.processHTTPMessageService.handleError));
  }
}
