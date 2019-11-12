import { Component, OnInit } from '@angular/core';
import { Seccion } from '../modelos/Seccion';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { SeccionService } from '../servicios/seccion.service';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { Errores } from '../modelos/Errores';
import { Alumno } from '../modelos/Alumno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {
  private errors:Errores[];
  private turnos:Turno[];
  private secciones:Seccion[];
  private cursos:Curso[];
  private spinnerTurno:Boolean;
  private spinnerSeccion:Boolean;
  private spinnerCurso:Boolean;
  private model:Curso;
  private alumno:Alumno;
  constructor(
    private _turno:TurnoService,
    private _seccion:SeccionService,
    private _curso:CursoService,
    private _route:Router
  ) {}

  ngOnInit() {
    this.spinnerTurno=false;
    this.spinnerSeccion=false;
    this.spinnerCurso=false;
    this.turnos=[];
    this.secciones=[];
    this.cursos=[];
    this.errors=[];
    this.model=new Curso;
    this.alumno=new Alumno;
    this.setErrors();
    this.getTurnos();
    this.getSecciones();
    this.getCursosInicial();
  }
  getTurnos():void{
    this.spinnerTurno=true;
    this._turno.getTurnos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turnos=res;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;

    });
  }
  getSecciones():void{
    this.spinnerSeccion=true;
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
      this.spinnerSeccion=false;
    },error=>{
      console.log("mi res");
      console.log(error);
      this.spinnerSeccion=false;
    });
  }
  getCursos(){
    if (this.model.seccion_id!='' || this.model.turno_id!=''){
      this.spinnerCurso=true;
      this.cursos=[];
      console.log("mi model");
      console.log(this.model);
      this._curso.getCursoLista(this.model).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.cursos=res;
        this.spinnerCurso=false;
        if(this.cursos.length==0)
          this.errors[1].getError();  
      },error=>{
        console.log("mi error");
        console.log(error);
        this.errors[0].getError();
      });
    }else
      this.errors[0].getError();
  }
  getCursosInicial(){
    this.spinnerCurso=true;
    this._curso.getCursos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.cursos=res;
      this.spinnerCurso=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerCurso=false;
      this.errors[0].getError();
    });
  }
  /*SelectAlumno(alumno:Alumno){
    console.log("me llego");
    console.log(alumno);
    this.alumno=alumno;
  }*/
  changeSelect(){
    console.log("cambio");
    this._route.navigate['ListaAlumnos'];
  }
  
  setErrors():void{
    this.errors.push(new Errores("Error al cargar"));
    this.errors.push(new Errores("No se encontro cursos"));
  }

}
