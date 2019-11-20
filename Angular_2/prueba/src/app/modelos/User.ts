export class User {
    id:String;
    nombre:String;
    apellido:String;
    carnet:String;
    email:String;
    telefono:String;
    password:String;
    tipo:String;
    email_verified_at:String;
    password_confirmation:String;
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