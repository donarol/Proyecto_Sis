import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../servicios/turno.service';
import { Turno } from '../modelos/Turno';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-turno-inicio',
  templateUrl: './turno-inicio.component.html',
  styleUrls: ['./turno-inicio.component.css']
})
export class TurnoInicioComponent implements OnInit {
  private titulos:String[]=['#','Nombre','Monto','Hora de Inicio','Hora de Finalizacion','Gestion'];
  private turnos:Turno[];
  private spinner:boolean;
  constructor(
    private _turno:TurnoService,
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.spinner=false;
    this.cargaTurno();
    this._user.getUserActual().subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      if(res.tipo==='Administrador'){
        console.log("usted es administrador")
      }else{
        alert('Usted no es Administrador');
        this._router.navigate(['']);
      }
    });
  }
  cargaTurno(){
    this.spinner=true;
    this._turno.getTurnos().subscribe(res=>{
      console.log("los turnos");
      console.log(res);
      this.turnos=res;
      this.spinner=false;
    },error=>{
      console.log("error al carga turnos");
      console.log(error);
      this.spinner=false;
      alert("error al cargar los turnos");
    });
  }
  borraTurno(turno:Turno){
    console.log("se borrar el  turno...");
    console.log(turno);
  }
}
