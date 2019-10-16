import { Component, OnInit } from '@angular/core';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';
import { CursoService } from '../servicios/curso.service';
import { User } from '../modelos/User';
import { Turno } from '../modelos/Turno';
import { Seccion } from '../modelos/Seccion';
import { Curso } from '../modelos/Curso';

@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css']
})
export class CursoNuevoComponent implements OnInit {
  private errors:Errores[]=[];
  private spinner:boolean;
  private administrador:User;
  private turno:Turno;
  private seccion:Seccion;
  private curso:Curso;
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.setErrors();
    this.spinner=false;
    this.administrador=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    this.curso=new Curso;
  }
  crearCurso(form:NgForm){
    console.log(form);
    if(form.valid){
      console.log("es valido");
      console.log("mi curso");
      console.log(this.curso);
      this.spinner=true;
      this._curso.addCurso(this.curso).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.spinner=false;
        this.curso = new Curso;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
      })
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
