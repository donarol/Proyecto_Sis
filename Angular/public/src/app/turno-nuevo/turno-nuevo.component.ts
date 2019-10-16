import { Component, OnInit } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { UserService } from '../servicios/user.service';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit {
  private turno:Turno;
  private errors:Errores[]=[];
  private spinner:boolean;
  constructor(
    private _turnoService:TurnoService,
    private _user:UserService
  ) { }

  ngOnInit() {
    this.turno=new Turno();
    this.setErrors();
    this.spinner=false;
   /* this._user.getUserActual().subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      if(res.tipo==='Administrador'){
        alert('Usted es Administrador');
      }else{
        alert('Usted no es Administrador');
      }
    });*/
  }
  /*onChangeGestion(deviceValue){
    console.log(deviceValue.target.value);
  }*/
  crearTurno(form:NgForm){
    console.log(form);
    if(form.valid){   
      this.spinner=true;   
      this._turnoService.addTurno(this.turno).subscribe(res=>{
        console.log("res");
        console.log(res);
        console.log("Turno Creado Exitosamente");
        this.spinner=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        console.log("mi mensaje error");
        console.log(error.message);
        this.spinner=false;
        alert("error al crear el turno");
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
  setErrors():void{
    this.errors.push(new Errores('Error al crear el Turno'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el monto'));
    this.errors.push(new Errores('Error al ingresar la hora de Inicio'));
    this.errors.push(new Errores('Error al ingresar la hora de Finalizacion'));
    this.errors.push(new Errores('Error al ingresar la Gestion'));
  }

}
