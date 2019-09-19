import { Component, OnInit } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit {
  private gestion:string[]=['2019','2020','2021'];
  private turno:Turno;
  constructor(
    private _turnoService:TurnoService
  ) { }

  ngOnInit() {
    this.turno=new Turno();
  }
  onChangeGestion(deviceValue){
    console.log(deviceValue.target.value);
  }
  crearTurno(){
    this._turnoService.addTurno(this.turno).subscribe(res=>{
      console.log("res");
      console.log(res);
    })

  }

}
