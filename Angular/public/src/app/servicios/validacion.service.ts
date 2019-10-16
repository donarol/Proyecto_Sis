import { Injectable } from '@angular/core';
import { User } from '../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() {}

  validarCampo(campo:string,min?:number){
    if(campo.length<min || campo.length<=0)
      return true;
    return false;
  }
  validarUser(user:User){
    console.log("validar user");
    console.log(user);
    var error:boolean[]=[false,false,false,false,false,false,false];
    return error;
  }
  
}
