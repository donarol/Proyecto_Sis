import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Administrador} from '../modelos/Administrador';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) {}
  addAdministrador(administrador:Administrador):Observable<Administrador>{
    return this.http.post<Administrador>('http://homestead.test/registroAdministrador',administrador,httpOptions);
  }
  getAdministrador(id):Observable<Administrador>{
    return this.http.get<Administrador>(`http://homestead.test/administrador/${id}`,httpOptions);
  }
  updateAdministrador(id,administrador:Administrador):Observable<Administrador>{
    return this.http.put<Administrador>(`http://homestead.test/administrador/${id}`,administrador,httpOptions);
  }
  getAdministradores():Observable<Administrador[]>{
    return this.http.get<Administrador[]>('http://homestead.test/administradores',httpOptions);
  }

  
}
