import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { Errores } from '../modelos/Errores';
import { User } from '../modelos/User';
import { Turno } from '../modelos/Turno';
import { Seccion } from '../modelos/Seccion';
import { CursoService } from '../servicios/curso.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso-datos-ii',
  templateUrl: './curso-datos-ii.component.html',
  styleUrls: ['./curso-datos-ii.component.css']
})
export class CursoDatosIIComponent implements OnInit {

@Input('CursoEnvio') set _curso_(valor:Curso){
    
  this.curso=new Curso;
  this.administrador=new User;
  this.turno=new Turno;
  this.seccion=new Seccion;
  if(valor===undefined || valor == null || valor.curso_id==""){
    console.log("es nulo");
  }else{
    console.log("me llego");
    console.log(valor);
    this.curso=valor;
    this.getDocente();
    this.getSeccion();
    this.getTurno();
    this.aux=valor.nombre.toString();
  }

};
private errors:Errores[]=[];
private spinner:boolean;
private spinnerDocente:boolean;
private spinnerSeccion:boolean;
private spinnerTurno:boolean;
private administrador:User;
private turno:Turno;
private seccion:Seccion;
private curso:Curso;
private aux:String;
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.spinner=false;
    this.spinnerDocente=false;
    this.spinnerSeccion=false;
    this.spinnerTurno=false;
    this.curso=new Curso;
    this.administrador=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    this.setErrors();
  }
  getDocente():void{
    this.spinnerDocente=true;
    this._curso.getDocente(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.administrador=res;
      this.spinnerDocente=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerDocente=false;
    });
  }
  getSeccion():void{
    this.spinnerSeccion=true;
    this._curso.getSeccion(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.seccion=res;
      this.spinnerSeccion=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerSeccion=false;
    });
  }
  getTurno():void{
    this.spinnerTurno=true;
    this._curso.getTurno(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      
      this.curso.gestion=this.turno.gestion;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
    });
  }
  modificarCurso(form:NgForm){
    console.log(form);
    if(form.valid){
      console.log("es valido");
      console.log("mi curso");
      this.curso.nombre=this.aux.toString();
      console.log(this.curso);
      this.spinner=true;
      this._curso.updateCurso(this.curso).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.spinner=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.docente.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.seccion.status==='INVALID')
        this.errors[3].getError();
      if(form.controls.turno.status==='INVALID')
        this.errors[4].getError();
      if(form.controls.gestion.status==='INVALID')
        this.errors[5].getError();
    }

  }
  SelecDocente(user:User){
    console.log("me llego docente: ");
    console.log(user);
    this.administrador=user;
    this.curso.user_id=this.administrador.id;
  }
  SelecSeccion(seccion:Seccion){
    console.log("me llego Seccion: ");
    console.log(seccion);
    this.seccion=seccion;
    this.curso.seccion_id=this.seccion.seccion_id;
  }
  SelecTurno(turno:Turno){
    console.log("me llego Turno: ");
    console.log(turno);
    this.turno=turno;
    this.curso.turno_id=this.turno.turno_id;
    this.curso.gestion=this.turno.gestion;
  }
  setErrors():void{
    this.errors.push(new Errores('Error al crear el Curso'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el Docente'));
    this.errors.push(new Errores('Error al ingresar la Seccion'));
    this.errors.push(new Errores('Error al ingresar el Turno'));
    this.errors.push(new Errores('Error al ingresar la Gestion'));
  }
}
