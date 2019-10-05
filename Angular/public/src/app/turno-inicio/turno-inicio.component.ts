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
  constructor(
    private _turno:TurnoService
  ) { }

  ngOnInit() {
    this._turno.getTurnos().subscribe(res=>{
      console.log("los turnos");
      console.log(res);
      this.turnos=res;
    });
  }
}
