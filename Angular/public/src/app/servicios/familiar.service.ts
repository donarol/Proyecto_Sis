import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Familiar} from '../modelos/Familiar';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class FamiliarService {

  constructor(private http: HttpClient) {}

  addFamiliar(familiar:Familiar):Observable<Familiar>{
    return this.http.post<Familiar>('http://homestead.test/registroFamiliar',familiar,httpOptions);
  }
  getFamiliar(id):Observable<Familiar>{
    return this.http.get<Familiar>(`http://homestead.test/familiar/${id}`,httpOptions);
  }
  updateFamiliar(id,familiar:Familiar):Observable<Familiar>{
    return this.http.put<Familiar>(`http://homestead.test/familiar/${id}`,familiar,httpOptions);
  }
}
