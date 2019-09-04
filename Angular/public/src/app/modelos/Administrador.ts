
import { Persona } from './Persona';
import { Rol } from './Rol';

export class Administrador extends Persona{
    administrador_id:string;
    carnet:string;
    telefono:string;
    cargo:string;
    correo:string;
    rol:Rol;
    //FALTA FOTO
    constructor(){
        super();
        this.administrador_id='';
        this.cargo='';
        this.carnet='';
        this.telefono='';
        this.correo='';
        this.rol=new Rol();
    }

}