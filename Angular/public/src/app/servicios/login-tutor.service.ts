import { Injectable } from '@angular/core';
import { Familiar } from '../modelos/Familiar';

@Injectable({
  providedIn: 'root'
})
export class LoginTutorService {

  constructor() { }
  login(correo:string,password:string,prueba?:string){
    if (prueba!=null){
      console.log("prueba nula");
      return null;
    }
    console.log("ingreso login");
    return this.getTutor('1');

  }
  getTutor(id:string){
    var familiar=new Familiar();
    familiar.nombre="nombre "+id;
    familiar.apellido="apellido "+id;
    familiar.carnet="carnet "+id;
    familiar.correo="correo "+id;
    familiar.telefono="telefono "+id;
    return familiar;
  }
}
