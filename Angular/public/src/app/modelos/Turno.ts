export class Turno {
    turno_id:String;
    nombre:String;
    monto:number;
    hora_inicio:String;
    hora_fin:String;
    gestion:String;
    constructor() {
        this.turno_id='';
        this.nombre='';
        this.monto=0;
        this.hora_inicio=''; 
        this.hora_fin='';
        this.gestion='';
    }
}