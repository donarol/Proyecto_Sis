import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() {}

  validarCampo(campo:string,min?:number){
    if(campo.length<min || campo.length<=0)
      return false;
    return true;
  }
  
}
