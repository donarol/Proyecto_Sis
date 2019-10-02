import { Component, OnInit } from '@angular/core';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-turno-nuevo',
  templateUrl: './turno-nuevo.component.html',
  styleUrls: ['./turno-nuevo.component.css']
})
export class TurnoNuevoComponent implements OnInit {
  private gestion:string[]=['2019','2020','2021'];
  private turno:Turno;
  constructor(
    private _turnoService:TurnoService,
    private _user:UserService
  ) { }

  ngOnInit() {
    this.turno=new Turno();
    this._user.getUserActual().subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      if(res.tipo==='Administrador'){
        alert('Usted es Administrador');
      }else{
        alert('Usted no es Administrador');
      }
    });
  }
  onChangeGestion(deviceValue){
    console.log(deviceValue.target.value);
  }
  crearTurno(){
    this._turnoService.addTurno(this.turno).subscribe(res=>{
      console.log("res");
      console.log(res);
      alert("Turno Creado Exitosamente");
    })

  }

}
