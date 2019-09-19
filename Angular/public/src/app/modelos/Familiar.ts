import { Persona } from './Persona';

export class Familiar extends Persona{
    familiar_id:string;
    carnet:string;
    correo:string;
    telefono:string;
    contrasena:string;
    //FALTA FOTO CREACION  
    constructor(){
        super();
        this.familiar_id='';
        this.carnet='';
        this.correo='';
        this.telefono='';
        this.contrasena='';
        //FALTA FECHA INICIALIZACION
    }
}