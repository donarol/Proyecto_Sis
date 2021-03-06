import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-turno-datos',
  templateUrl: './turno-datos.component.html',
  styleUrls: ['./turno-datos.component.css']
})
export class TurnoDatosComponent implements OnInit {
  turno:Turno;
  private errors:Errores[]=[];
  private spinner:boolean;
  constructor(
    private rutaActiva:ActivatedRoute,
    private _turno:TurnoService,
    private _user:UserService,
    private _router:Router
  ) {}

  ngOnInit() {
    this.turno=new Turno();
    this.spinner=true;
    this.setErrors();
    this.getTurno(this.rutaActiva.snapshot.params.id);   
  }
  getTurno(id){
    this._turno.getTurno(id).subscribe(res=>{
      console.log("mi res t");
      console.log(res);
      this.turno=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[0].getError();
    });
  }
  updateTurno(form:NgForm){
    console.log(form);
    if(form.valid){
      this.spinner=true;
      this._turno.updateTurno(this.turno).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.spinner=false;
        this.errors[6].getError();
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
        this.errors[0].getError();
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.monto.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.hora_inicio.status==='INVALID')
        this.errors[3].getError();
      if(form.controls.hora_fin.status==='INVALID')
        this.errors[4].getError();
      if(form.controls.gestion.status==='INVALID')
        this.errors[5].getError();
    }
  }


  setErrors(){
    this.errors.push(new Errores('Error al crear el Turno'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el monto'));
    this.errors.push(new Errores('Error al ingresar la hora de Inicio'));
    this.errors.push(new Errores('Error al ingresar la hora de Finalizacion'));
    this.errors.push(new Errores('Error al ingresar la Gestion'));// 5

    this.errors.push(new Errores('Modificado Exitosamente'));//6
  }

}
