import { Component, OnInit } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit {
  private turno:Turno;
  errors:Errores[]=[];
  private spinner:boolean;
  access:Boolean;
  constructor(
    private _turnoService:TurnoService,
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.turno=new Turno();
    this.setErrors();
    this.spinner=false;
    this.access=false;
    this.isAdministrador();
  }
  isAdministrador(){  
    this.spinner=true;
    this._user.getUserActual().subscribe(res=>{
      if(res.tipo==='Administrador'){
        this.access=true;
      }else{
        alert('Usted no es Administrador');
        this.access=false;
        this._router.navigate(['']);
      }
      this.spinner=false;
    },error=>{
      this.spinner=false;
      this.errors[6].onError();
    });
  }
  /*onChangeGestion(deviceValue){
    console.log(deviceValue.target.value);
  }*/
  crearTurno(form:NgForm){
    console.log(form);
    if(form.valid && this.turno.monto>0 && parseInt(this.turno.gestion+"")>=2019 ){   
      this.spinner=true;   
      this._turnoService.addTurno(this.turno).subscribe(res=>{
        console.log("res");
        console.log(res);
        this.spinner=false;
        this.errors[8].getError();
        
      },error=>{
        console.log("mi error");
        console.log(error);
        console.log("mi mensaje error");
        console.log(error.message);
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
      if(this.turno.monto==0)
        this.errors[7].getError();
      if( parseInt(this.turno.gestion+"")<2019 )
        this.errors[5].getError();
    }
  }
  setErrors():void{
    this.errors.push(new Errores('Error al crear el Turno'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el monto'));
    this.errors.push(new Errores('Error al ingresar la hora de Inicio'));
    this.errors.push(new Errores('Error al ingresar la hora de Finalizacion'));
    this.errors.push(new Errores('Error al ingresar la Gestion'));//5

    this.errors.push(new Errores('Error al verificar el Usuario'));//6
    this.errors.push(new Errores('El monto debe ser mayor a 0'));

    this.errors.push(new Errores('Turno creado exitosamente'));//8
  }

}

