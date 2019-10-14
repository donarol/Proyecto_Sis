import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { User } from '../modelos/User';

@Component({
  selector: 'app-seleccion-docente',
  templateUrl: './seleccion-docente.component.html',
  styleUrls: ['./seleccion-docente.component.css']
})
export class SeleccionDocenteComponent implements OnInit {
  @Input('idSeguro') private idSeguro;
  private administradores:User[];
  private imagenName:string;
  private model:string;
  private aux:string;
  @Output() selecDocente = new EventEmitter<string>();
  constructor(
    private _administrador:AdministradorService
  ) { }

  ngOnInit() {
    this.getAdministradores();
    this.model='';
    this.imagenName='admin.png';
  }

  selectDocente(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarDocente(){
    this.model=this.aux;
    this.selecDocente.emit(this.model);
  }
  getAdministradores():void{
    this._administrador.getAdministradores().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      
      this.administradores=res;
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }

}
