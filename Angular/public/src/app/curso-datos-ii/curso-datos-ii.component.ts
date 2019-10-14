import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { Errores } from '../modelos/Errores';
import { User } from '../modelos/User';
import { Turno } from '../modelos/Turno';
import { Seccion } from '../modelos/Seccion';
import { CursoService } from '../servicios/curso.service';
import { UserService } from '../servicios/user.service';
import { SeccionService } from '../servicios/seccion.service';
import { TurnoService } from '../servicios/turno.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-curso-datos-ii',
  templateUrl: './curso-datos-ii.component.html',
  styleUrls: ['./curso-datos-ii.component.css']
})
export class CursoDatosIIComponent implements OnInit {
@Input('CursoEnvio') private curso:Curso;
private errors:Errores[]=[];
private spinner:boolean;
private spinnerDocente:boolean;
private spinnerSeccion:boolean;
private spinnerTurno:boolean;
private administrador:User;
private turno:Turno;
private seccion:Seccion;
private aux:String;
  constructor(
    private _curso:CursoService,
    private _administrador:UserService,
    private _seccion:SeccionService,
    private _turno:TurnoService,
  ) {}

  ngOnInit() {
    this.setErrors();
    this.spinner=false;
    this.spinnerDocente=false;
    this.spinnerSeccion=false;
    this.spinnerTurno=false;
    this.administrador=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    this.SelecDocente(this.curso.user_id);
    this.SelecSeccion(this.curso.seccion_id);
    this.SelecTurno(this.curso.turno_id);
    this.aux=this.curso.nombre.toString();
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
  SelecDocente(id:String){
    console.log("me llego docente: ");
    console.log(id);
    this.spinnerDocente=true;
    this._administrador.getUser(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.administrador=res;
      this.curso.user_id=this.administrador.id;
      this.spinnerDocente=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerDocente=false;
    });
  }
  SelecSeccion(id:String){
    console.log("me llego Seccion: ");
    console.log(id);
    this.spinnerSeccion=true;
    this._seccion.getSeccion(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.seccion=res;
      this.curso.seccion_id=this.seccion.seccion_id;
      this.spinnerSeccion=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerSeccion=false;
    });
  }
  SelecTurno(id:String){
    console.log("me llego Turno: ");
    console.log(id);
    this.spinnerTurno=true;
    this._turno.getTurno(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      this.curso.turno_id=this.turno.turno_id;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
    });
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
