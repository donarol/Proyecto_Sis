import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { Alumno } from '../modelos/Alumno';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private alumnos:Alumno[];
  private errors:Errores[];
  private spinner:Boolean;
  private imagenName:string;
  @Input('CursoEnvio') set _familiar_(valor:Curso){
    if(valor!==undefined && valor !== null){
      this.spinner=false;
      this.imagenName="alumno2.jpg";
      console.log("me llego");
      console.log(valor);
      this.getAlumnos(valor);
    }else
      console.log("es nulo");
  };
  @Output() selectAlumno = new EventEmitter<Alumno>();
  constructor(
    private _curso:CursoService
  ){
  
  }

  ngOnInit() {
    this.alumnos=[];
    this.errors=[];
    this.geterrors();
    
    //this.getAlumnos();
  }
  getAlumnos(curso:Curso):void{
    this.spinner=true;
    this._curso.getAlumnos(curso).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.alumnos=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
      this.spinner=false;
    });
  }
  verAlumno(alumno:Alumno){
    this.selectAlumno.emit(alumno);
  }
  geterrors():void{
    this.errors.push(new Errores("error al cargar los alumnos"));
  }
}
