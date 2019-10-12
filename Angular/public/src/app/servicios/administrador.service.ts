import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Administrador} from '../modelos/Administrador';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) {}
  getAdministradores():Observable<Administrador[]>{
    return this.http.get<Administrador[]>('http://homestead.test/api/auth/administradores',this.getoken());
  }
  //VER LO QUE DEVUELVE
  getCursosAdministrador(administrador:User){
    return this.http.get(`http://homestead.test/api/auth/administradoresCursos/${administrador.id}`,this.getoken());
  }
  private getoken(){
    var httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('accto')
      })
    };
    return httpOptions;
  }

  
}
