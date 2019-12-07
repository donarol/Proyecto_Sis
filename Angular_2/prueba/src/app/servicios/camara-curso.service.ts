import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Camara_Curso } from '../modelos/Camara_Curso';
@Injectable({
  providedIn: 'root'
})
export class CamaraCursoService {

  constructor(private http:HttpClient) { }
  addCamaraCurso(datos:Camara_Curso):Observable<Camara_Curso>{
    return this.http.post<Camara_Curso>('http://homestead.test/api/auth/registroCamaraCurso',datos,this.getToken());
  }
  
  getToken(){
    var httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('accto')
      })
    };
    return httpOptions;
  }
}
