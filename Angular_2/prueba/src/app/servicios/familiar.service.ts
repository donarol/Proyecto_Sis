import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class FamiliarService {

  constructor(private http: HttpClient) {}
  getFamiliares():Observable<User[]>{
    return this.http.get<User[]>('http://homestead.test/api/auth/familiares',this.getoken());
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
