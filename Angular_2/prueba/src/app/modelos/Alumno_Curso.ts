export class Alumno_Curso{
    alumno_curso_id:String;
    alumno_id:String;
    curso_id:String;
    estado:Boolean;
    constructor(){
        this.alumno_curso_id='';
        this.alumno_id='';
        this.curso_id='';
        this.estado=false;
    }
}