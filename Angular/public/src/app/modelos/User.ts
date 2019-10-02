export class User {
    id:string;
    nombre:string;
    apellido:string;
    carnet:string;
    email:string;
    telefono:string;
    password:string;
    tipo:string;
    email_verified_at:string;
    password_confirmation:string;
    constructor() {
        this.id='';
        this.nombre='';
        this.apellido='';
        this.carnet='';
        this.email='';
        this.telefono='';
        this.password='';
        this.tipo='';
        this.email_verified_at='';
        this.password_confirmation='';
    }
}