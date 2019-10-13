import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Curso } from '../modelos/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http:HttpClient) {}
  addCurso( turno:Curso):Observable<Curso>{
    return this.http.post<Curso>('http://homestead.test/api/auth/registroCurso',turno,this.getoken());
  }
  getCursos():Observable<Curso[]>{
    return this.http.get<Curso[]>('http://homestead.test/api/auth/cursos',this.getoken());
  }
  getCurso(id:string):Observable<Curso>{
    return this.http.get<Curso>(`http://homestead.test/api/auth/curso/${id}`,this.getoken());
  }
  updateCurso(turno:Curso):Observable<Curso>{
    return this.http.put<Curso>(`http://homestead.test/api/auth/curso/${turno.turno_id}`,turno,this.getoken());
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
