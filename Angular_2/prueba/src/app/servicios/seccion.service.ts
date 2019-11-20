import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Seccion} from '../modelos/Seccion';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {

  constructor(private http:HttpClient) {}

  getSecciones():Observable<Seccion[]>{
    return this.http.get<Seccion[]>('http://homestead.test/api/auth/secciones',this.getoken());
  }
  getSeccion(id:String):Observable<Seccion>{
    return this.http.get<Seccion>(`http://homestead.test/api/auth/seccion/${id}`,this.getoken());
  }
  updateSeccion(seccion:Seccion):Observable<Seccion>{
    return this.http.put<Seccion>(`http://homestead.test/api/auth/seccion/${seccion.seccion_id}`,seccion,this.getoken());
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
