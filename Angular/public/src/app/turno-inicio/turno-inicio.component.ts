import { Component, OnInit } from '@angular/core';
import { TurnoService } from '../servicios/turno.service';
import { Turno } from '../modelos/Turno';

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
    private _turno:TurnoService
  ) { }

  ngOnInit() {
    this.spinner=false;
    this.cargaTurno();

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
