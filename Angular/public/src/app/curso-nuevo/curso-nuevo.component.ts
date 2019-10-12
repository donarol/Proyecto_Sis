import { Component, OnInit } from '@angular/core';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css']
})
export class CursoNuevoComponent implements OnInit {
  private errors:Errores[]=[];
  private spinner:boolean;
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.setErrors();
    this.spinner=false;
    this._curso.addCurso();
  }
  crearCurso(form:NgForm){
    console.log(form);
    if(form.valid){
      console.log("es valido");
      this.spinner=true;


    }else{
      console.log("no es valido");
    }
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
