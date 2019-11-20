import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Ingrediente_Plato } from '../modelos/Ingrediente_Plato';

@Injectable({
  providedIn: 'root'
})
export class IngredientePlatoService {

  constructor(private http:HttpClient) {}

  addIngredientePlato(datos:Ingrediente_Plato):Observable<Ingrediente_Plato>{
    return this.http.post<Ingrediente_Plato>('http://homestead.test/api/auth/registroIngredientePlato',datos,this.getoken());
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
