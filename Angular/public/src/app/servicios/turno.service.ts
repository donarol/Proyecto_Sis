import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Turno} from '../modelos/Turno';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http:HttpClient) {}

  addTurno( turno:Turno):Observable<Turno>{
    return this.http.post<Turno>('http://homestead.test/registroTurno',turno,httpOptions);
  }
  getTurnos(){
    return this.http.get<Turno[]>('http://homestead.test/turnos',httpOptions);
  }

}
