import { Injectable } from '@angular/core';
import { Observable, throwError, from, Observer } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Plato} from '../modelos/Plato';
import { Ingrediente } from '../modelos/Ingrediente';
@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http:HttpClient){}

  addPlato( plato:Plato):Observable<Plato>{
    return this.http.post<Plato>('http://homestead.test/api/auth/registroPlato',plato,this.getoken());
  }
  getPlatos():Observable<Plato[]>{
    return this.http.get<Plato[]>('http://homestead.test/api/auth/platos',this.getoken());
  }
  getPlato(id:String):Observable<Plato>{
    return this.http.get<Plato>(`http://homestead.test/api/auth/plato/${id}`,this.getoken());
  }
  getPlatoFecha(fecha:String):Observable<Plato[]>{
    return this.http.get<Plato[]>(`http://homestead.test/api/auth/platoFecha/${fecha}`,this.getoken());
  }
  getPlatoIngredientes(id:String):Observable<Ingrediente[]>{
    return this.http.get<Ingrediente[]>(`http://homestead.test/api/auth/plato/${id}/ingredientes`,this.getoken());
  }
  updatePlato(plato:Plato):Observable<Plato>{
    return this.http.put<Plato>(`http://homestead.test/api/auth/plato/${plato.plato_id}`,plato,this.getoken());
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
