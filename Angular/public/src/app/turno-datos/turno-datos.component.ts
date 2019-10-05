import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';

@Component({
  selector: 'app-turno-datos',
  templateUrl: './turno-datos.component.html',
  styleUrls: ['./turno-datos.component.css']
})
export class TurnoDatosComponent implements OnInit {
  private turno:Turno;
  constructor(
    private rutaActiva:ActivatedRoute,
    private _turno:TurnoService
  ) {}

  ngOnInit() {
    this.turno=new Turno();
    this._turno.getTurno(this.rutaActiva.snapshot.params.id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      console.log("mi modelo");
      console.log(this.turno);
    })
  }

}
