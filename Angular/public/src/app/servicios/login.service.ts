import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Administrador} from '../modelos/Administrador';
import {Familiar} from '../modelos/Familiar';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) {}
  loginAdministrador(admin:Administrador):Observable<any>{
    return this.http.post<Administrador>('url de la api de login',admin,httpOptions);
  }
  loginTutor(tutor:Familiar):Observable<any>{
    return this.http.post<Familiar>('url de la api login',tutor,httpOptions);
  }
  registroAdministrador(admin:Administrador):Observable<any>{
    return this.http.post<Administrador>('url de la api de registro',admin,httpOptions);
  }  
  registroTutor(tutor:Familiar):Observable<any>{
    return this.http.post<Familiar>('url de la api de registro',tutor,httpOptions);
  }
}
