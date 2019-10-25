import { Injectable } from '@angular/core';
import { Observable, throwError, from, Observer } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Ingrediente } from '../modelos/Ingrediente';
@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  constructor(private http:HttpClient){}

  addIngrediente( ingrediente:Ingrediente):Observable<Ingrediente>{
    return this.http.post<Ingrediente>('http://homestead.test/api/auth/registroIngrediente',ingrediente,this.getoken());
  }
  getIngredientes():Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>('http://homestead.test/api/auth/ingredientes',this.getoken());
  }
  getIngrediente(id:String):Observable<Ingrediente>{
    return this.http.get<Ingrediente>(`http://homestead.test/api/auth/ingrediente/${id}`,this.getoken());
  }
  updateIngrediente(ingrediente:Ingrediente):Observable<Ingrediente>{
    return this.http.put<Ingrediente>(`http://homestead.test/api/auth/ingrediente/${ingrediente.ingrediente_id}`,ingrediente,this.getoken());
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
