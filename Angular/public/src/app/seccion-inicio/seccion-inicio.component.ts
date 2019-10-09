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
  constructor(
    private _seccion:SeccionService
  ){}

  ngOnInit() {
    this.cargaSecciones();
    this.setErrors();
  }
  cargaSecciones(){
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
    });
  }
  modificarSeccion(form:NgForm,seccion:Seccion){
    console.log(form);
    if(form.valid){
      console.log("se modifica");
      /*this._seccion.updateSeccion(seccion).subscribe(res=>{
        console.log("mi res");
        console.log(res);
      });*/
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
