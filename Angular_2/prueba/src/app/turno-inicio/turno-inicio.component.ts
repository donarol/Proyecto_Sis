import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../servicios/turno.service';
import { Turno } from '../modelos/Turno';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-turno-inicio',
  templateUrl: './turno-inicio.component.html',
  styleUrls: ['./turno-inicio.component.css']
})
export class TurnoInicioComponent implements OnInit {
  private titulos:String[]=['#','Nombre','Monto','Hora de Inicio','Hora de Finalizacion','Gestion'];
  private turnos:Turno[];
  private spinner:boolean;
  errors:Errores[];
  access:Boolean;
  constructor(
    private _turno:TurnoService,
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.spinner=true;
    this.errors=[];
    this.access=false;
    this.setErrors();
    this.isAdministrador();
  
  }
  isAdministrador(){
    this._user.getUserActual().subscribe(res=>{
      if(res.tipo==='Administrador'){
        this.cargaTurno();
        this.access=true;
      }else{
        alert('Usted no es Administrador');
        this.access=false;
        this._router.navigate(['']);
      }
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[2].onError();
    });
  }
  cargaTurno(){
    this.spinner=true;
    this._turno.getTurnos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turnos=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[0].getError();
    });
  }
  borraTurno(turno:Turno,i:number){
    console.log("se borrar el  turno...");
    console.log(turno);
    console.log("con posicion");
    console.log(i);
    this.spinner=true;
    this._turno.deleteTurno(turno).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.spinner=false;
      this.errors[3].getError();
      this.turnos.splice(i,1);
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[1].getError();
    });
  }
  setErrors():void{
    this.errors.push(new Errores('Error al carga los turnos'));
    this.errors.push(new Errores('Error al borrar el turno'));//1

    this.errors.push(new Errores('Error al verificar el Usuario'));//2
    this.errors.push(new Errores('Turno borrado Exitosamente'));
  }
}
