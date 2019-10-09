export class Turno {
    turno_id:string;
    nombre:string;
    monto:number;
    hora_inicio:string;
    hora_fin:string;
    gestion:string;
    constructor() {
        this.turno_id='';
        this.nombre='';
        this.monto=0;
        this.hora_inicio=''; 
        this.hora_fin='';
        this.gestion='';
    }
}