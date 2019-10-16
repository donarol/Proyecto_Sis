import { Component, OnInit } from '@angular/core';
import { Seccion } from '../modelos/Seccion';
import { SeccionService } from '../servicios/seccion.service';
import { NgForm } from '@angular/forms';
import { Errores } from '../modelos/Errores';

@Component({
  selector: 'app-seccion-inicio',
  templateUrl: './seccion-inicio.component.html',
  styleUrls: ['./seccion-inicio.component.css']
})
export class SeccionInicioComponent implements OnInit {
  private secciones:Seccion[];
  private errors:Errores[]=[];
  private spinner:boolean;
  constructor(
    private _seccion:SeccionService
  ){}

  ngOnInit() {
    this.spinner=true;
    this.getSecciones();
    this.setErrors();
  }
  getSecciones(){
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      alert("error al cargar las secciones");
    });
  }
  updateSeccion(form:NgForm,id){
    console.log(form);
    if(form.valid){
      this.spinner=true;
      console.log("se modifica");
      console.log(this.secciones[id-1]);
      this._seccion.updateSeccion(this.secciones[id-1]).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.spinner=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
        alert("error al actualizar la seccion");
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
      this.errors[1].getError();
      if(form.controls.descripcion.status==='INVALID')
      this.errors[2].getError();
    }
  }
  setErrors():void{
    this.errors.push(new Errores('Error al actualizar la Seccion'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar la descripcion'));
  }
}
