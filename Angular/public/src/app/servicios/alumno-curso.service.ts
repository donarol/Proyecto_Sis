import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Alumno_Curso } from '../modelos/Alumno_Curso';
@Injectable({
  providedIn: 'root'
})
export class AlumnoCursoService {

  constructor(private http:HttpClient) {}

  addAlumnoCurso(datos:Alumno_Curso):Observable<Alumno_Curso>{
    return this.http.post<Alumno_Curso>('http://homestead.test/api/auth/registroAlumnoCurso',datos,this.getoken());
  }
  
  getoken(){
    var httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+localStorage.getItem('accto')
      })
    };
    return httpOptions;
  }

}
