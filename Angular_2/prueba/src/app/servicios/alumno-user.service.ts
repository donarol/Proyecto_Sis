import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Alumno_User} from '../modelos/Alumno_User';
@Injectable({
  providedIn: 'root'
})
export class AlumnoUserService {

  constructor(private http:HttpClient) { }
  
  addAlumnoUser(datos:Alumno_User):Observable<Alumno_User>{
    return this.http.post<Alumno_User>('http://homestead.test/api/auth/registroAlumnoUser',datos,this.getoken());
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
