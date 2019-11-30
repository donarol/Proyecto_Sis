import { Component, OnInit } from '@angular/core';
import { Errores } from '../modelos/Errores';
import { Alumno } from '../modelos/Alumno';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-alumno-datos-personal',
  templateUrl: './alumno-datos-personal.component.html',
  styleUrls: ['./alumno-datos-personal.component.css']
})
export class AlumnoDatosPersonalComponent implements OnInit {
  private alumno:Alumno;
  private aux:Alumno;
  private errors:Errores[];
  private show:Boolean;
  private spinner:Boolean;
  private ver:Boolean;
  constructor(
    private _alumno:AlumnoService,
    private rutaActiva:ActivatedRoute
    ) { }

  ngOnInit() {
    this.errors=[];
    this.show=true;
    this.spinner=false;
    this.ver=false;
    this.alumno=new Alumno;
    this.aux=new Alumno;
    this.setErrors();
    this.getAlumno(this.rutaActiva.snapshot.params.id);
  }
  getAlumno(ruta):void{
    this.spinner=true;
    this._alumno.getAlumno(ruta).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.alumno=res;
      this.aux=this.setAux(res);
      this.spinner=false;
      this.ver=true;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
      this.spinner=false;
    });
  }
  setAux(model:Alumno):Alumno{
    var aux:Alumno=new Alumno;
    aux.alumno_id=model.alumno_id;
    aux.apellido=model.apellido;
    aux.certificado_nacimiento=model.certificado_nacimiento;
    aux.certificado_vacuna=model.certificado_vacuna;
    aux.domicilio=model.domicilio;
    aux.fecha_nacimiento=model.fecha_nacimiento;
    aux.lugar_nacimiento=model.lugar_nacimiento;
    aux.nombre=model.nombre;
    aux.rude=model.rude;
    aux.telefono=model.telefono;
    aux.tipo_sanguineo=model.tipo_sanguineo;
    return aux;
  }
  setErrors():void{
    this.errors.push(new Errores('Error al cargar los datos del Alumno'));
    this.errors.push(new Errores('Error al ingresar el Nombre'));
    this.errors.push(new Errores('Error al ingresar el Apellido'));
    this.errors.push(new Errores('Error al ingresar la fecha de Nacimiento'));
    this.errors.push(new Errores('Error al ingresar el lugar de Nacimiento'));
    this.errors.push(new Errores('Error al ingresar el Tipo Sanguineo'));
    this.errors.push(new Errores('Error al ingresar el Telefono'));
    this.errors.push(new Errores('Error al ingresar el Domicilio'));//7

    this.errors.push(new Errores('Error al Modificar los Datos'));
    this.errors.push(new Errores('Datos Modificados Exitosamente'));//9
    
  }
}
