import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/Alumno';
import { AlumnoService } from '../servicios/alumno.service';
import { Errores } from '../modelos/Errores';
import { formatDate } from '@angular/common';
import { Curso } from '../modelos/Curso';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css']
})
export class AlumnoNuevoComponent implements OnInit {
  private alergias:String[]=[];
  private alumno:Alumno;
  private errors:Errores[]=[];
  private today:Date;
  private curso:Curso;
  private turno:Turno;
  private spinnerTurno:Boolean;
  private spinner:Boolean;
  jstoday = '';
  constructor(
    private _alumno:AlumnoService,
    private _turno:TurnoService
  ) {}

  ngOnInit() {
    this.alumno=new Alumno;
    this.curso=new Curso;
    this.turno=new Turno;
    this.spinnerTurno=false;
    this.spinner=false;
    this.today= new Date;
    this.setErrors();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');

  }

  inscribirAlumno(form:NgForm){
  
    console.log(form);
    if(form.valid){
      console.log("es valido");
      this.spinner=true;
      this._alumno.addAlumno(this.alumno).subscribe(res=>{
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
      if(form.controls.apellido.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.fecha_nacimiento.status==='INVALID')
        this.errors[3].getError();
      if(form.controls.lugar_nacimiento.status==='INVALID')
        this.errors[4].getError();
      if(form.controls.tipo_sanguineo.status==='INVALID')
        this.errors[5].getError();
      if(form.controls.telefono.status==='INVALID')
        this.errors[6].getError();
      if(form.controls.domicilio.status==='INVALID')
        this.errors[7].getError();
      if(form.controls.curso.status==='INVALID')
        this.errors[8].getError();
      if(form.controls.turno.status==='INVALID')
        this.errors[9].getError();
    }
   /* */
  }
  SelecCurso(curso:Curso){
    console.log("me llego curso: ");
    console.log(curso);
    this.curso=curso;
    this.cargaTurno(this.curso.turno_id);
  }
  cargaTurno(id:String){
    this.spinnerTurno=true;
    this._turno.getTurno(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
    });
  }
  setErrors():void{
    this.errors.push(new Errores('Error al inscribir al alumno'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el apellido'));
    this.errors.push(new Errores('Error al ingresar la fecha de nacimiento'));
    this.errors.push(new Errores('Error al ingresar el lugar de nacimiento'));
    this.errors.push(new Errores('Error al ingresar el tipo sanguineo'));
    this.errors.push(new Errores('Error al ingresar el telefono'));
    this.errors.push(new Errores('Error al ingresar el domicilio'));
    this.errors.push(new Errores('Error al ingresar el curso'));
    this.errors.push(new Errores('Error al ingresar el turno'));
  }
}
