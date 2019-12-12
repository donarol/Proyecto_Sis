import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Alumno} from '../modelos/Alumno';
import { headersToString } from 'selenium-webdriver/http';
import { Curso } from '../modelos/Curso';
import { User } from '../modelos/User';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) {}
  addAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.post<Alumno>('http://homestead.test/api/auth/registroAlumno',alumno,this.getToken());
  }/*
  getCurso(alumno:Alumno):Observable<Curso>{
    return this.http.get<Curso>(`http://homestead.test/api/auth/alumno/${alumno.alumno_id}/cursos`);
  }*/
  getAlumno(id):Observable<Alumno>{
    return this.http.get<Alumno>(`http://homestead.test/api/auth/alumno/${id}`,this.getToken());
  }
  updateAlumno(alumno:Alumno):Observable<Alumno>{
    return this.http.put<Alumno>(`http://homestead.test/api/auth/alumno/${alumno.alumno_id}`,alumno,this.getToken());
  }
  getFamiliares(alumno:Alumno):Observable<User[]>{
    return this.http.get<User[]>(`http://homestead.test/api/auth/alumno/${alumno.alumno_id}/familiares`,this.getToken());
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
