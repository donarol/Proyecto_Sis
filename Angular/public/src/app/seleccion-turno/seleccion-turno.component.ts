import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-seleccion-turno',
  templateUrl: './seleccion-turno.component.html',
  styleUrls: ['./seleccion-turno.component.css']
})
export class SeleccionTurnoComponent implements OnInit {
  private turnos:Turno[];
  private model:string;private imagenName:string;
  private aux:string;
  @Output() selecTurno = new EventEmitter<string>();
  constructor(
    private _turno:TurnoService
  ) { }

  ngOnInit() {
    this.getTurnos();
    this.imagenName='admin.png';
  }
  selectTurno(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarTurno(){
    this.model=this.aux;
    this.selecTurno.emit(this.model);
  }
  getTurnos():void{
    this._turno.getTurnos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turnos=res;
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }

}
