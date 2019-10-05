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
    error[0]=this.validarCampo(user.nombre);
    error[1]=this.validarCampo(user.apellido);
    error[2]=this.validarCampo(user.carnet);
    error[3]=this.validarCampo(user.telefono);
    error[4]=this.validarCampo(user.email);
    error[5]=this.validarCampo(user.password,7);
    error[6]=this.validarCampo(user.password_confirmation,7);
    return error;
  }
  
}
