import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../modelos/Curso';
import { User } from '../modelos/User';
import { Seccion } from '../modelos/Seccion';
import { Turno } from '../modelos/Turno';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) {}
  addCurso( curso:Curso):Observable<Curso>{
    return this.http.post<Curso>('http://homestead.test/api/auth/registroCurso',curso,this.getoken());
  }
  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>('http://homestead.test/api/auth/cursos',this.getoken());
  }
  getCurso(id:String):Observable<Curso>{
    return this.http.get<Curso>(`http://homestead.test/api/auth/curso/${id}`,this.getoken());
  }
  getDocente(id:String):Observable<User>{
    return this.http.get<User>(`http://homestead.test/api/auth/cursoDocente/${id}`,this.getoken());
  }
  getSeccion(id:String):Observable<Seccion>{
    return this.http.get<Seccion>(`http://homestead.test/api/auth/cursoSeccion/${id}`,this.getoken());  
  }
  getTurno(id:String):Observable<Turno>{
    return this.http.get<Turno>(`http://homestead.test/api/auth/cursoTurno/${id}`,this.getoken());
  }
  updateCurso(curso:Curso):Observable<Curso>{
    return this.http.put<Curso>(`http://homestead.test/api/auth/curso/${curso.curso_id}`,curso,this.getoken());
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
