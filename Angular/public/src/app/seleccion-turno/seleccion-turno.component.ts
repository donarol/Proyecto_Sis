import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-seleccion-turno',
  templateUrl: './seleccion-turno.component.html',
  styleUrls: ['./seleccion-turno.component.css']
})
export class SeleccionTurnoComponent implements OnInit {
  @Input('idSeguro') private idSeguro;
  private turnos:Turno[];
  private model:Turno;
  private aux:string;
  @Output() selecTurno = new EventEmitter<Turno>();
  constructor(
    private _turno:TurnoService
  ) { }

  ngOnInit(){
    this.getTurnos();
  }
  selectTurno(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarTurno(){
  /*  this.model=this.aux;
    this.selecTurno.emit(this.model);*/
    if(this.getTurno(this.aux)!=null){
      console.log("se enviara");
      this.model=this.getTurno(this.aux);
      this.selecTurno.emit(this.model);
    }else{
      console.log("es nulo no se enviara nada");
    }
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
  getTurno(id:String){
    console.log("se recibe: "+id);
    for (let index = 0; index < this.turnos.length; index++) {
      console.log("se ve "+this.turnos[index].turno_id);
      if(this.turnos[index].turno_id==id){
        console.log("se encontro "+this.turnos[index].turno_id);
        return this.turnos[index];
      }
    }
    return null;
  }

}
