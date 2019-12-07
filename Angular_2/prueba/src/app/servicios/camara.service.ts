import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Camara } from '../modelos/Camara';
@Injectable({
  providedIn: 'root'
})
export class CamaraService {

  constructor(private http:HttpClient) { }
  addCamara(camara:Camara):Observable<Camara>{
    return this.http.post<Camara>('http://homestead.test/api/auth/registroCamara',camara,this.getToken());
  }
  getCamaras():Observable<Camara[]>{
    return this.http.get<Camara[]>('http://homestead.test/api/auth/camaras',this.getToken());
  }
  getCamara(id:String):Observable<Camara>{
    return this.http.get<Camara>(`http://homestead.test/api/auth/camara/${id}`,this.getToken());
  }
  updateCamara(camara:Camara):Observable<Camara>{
    return this.http.put<Camara>(`http://homestead.test/api/auth/camara/${camara.camara_id}`,camara,this.getToken());
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
