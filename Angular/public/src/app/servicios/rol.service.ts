import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Rol } from '../modelos/Rol';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) {}

  getRoles(){
    return this.http.get<Rol[]>('http://homestead.test/roles',httpOptions);
  }
}
