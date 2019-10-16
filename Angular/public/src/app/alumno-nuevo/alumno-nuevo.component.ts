import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/Alumno';
import { AlumnoService } from '../servicios/alumno.service';
import { Errores } from '../modelos/Errores';
import { formatDate } from '@angular/common';

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
  jstoday = '';
  constructor(
    private _alumno:AlumnoService
  ) {}

  ngOnInit() {
    this.alumno=new Alumno;
    this.today= new Date();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
  }
  inscribir(){
    console.log("mi alumnos");
    console.log(this.alumno);
    this._alumno.addAlumno(this.alumno).subscribe(res=>{
      console.log("mi res");
      console.log(res);
    },error=>{
      console.log("mi error");
      console.log(error);
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
  }
}
