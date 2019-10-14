import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Turno} from '../modelos/Turno';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(private http:HttpClient) {}

  addTurno( turno:Turno):Observable<Turno>{
    return this.http.post<Turno>('http://homestead.test/api/auth/registroTurno',turno,this.getoken());
  }
  getTurnos():Observable<Turno[]>{
    return this.http.get<Turno[]>('http://homestead.test/api/auth/turnos',this.getoken());
  }
  getTurno(id:String):Observable<Turno>{
    return this.http.get<Turno>(`http://homestead.test/api/auth/turno/${id}`,this.getoken());
  }
  updateTurno(turno:Turno):Observable<Turno>{
    return this.http.put<Turno>(`http://homestead.test/api/auth/turno/${turno.turno_id}`,turno,this.getoken());
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
