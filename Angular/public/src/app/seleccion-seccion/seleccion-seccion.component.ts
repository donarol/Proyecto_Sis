import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { SeccionService } from '../servicios/seccion.service';
import { Seccion } from '../modelos/Seccion';

@Component({
  selector: 'app-seleccion-seccion',
  templateUrl: './seleccion-seccion.component.html',
  styleUrls: ['./seleccion-seccion.component.css']
})
export class SeleccionSeccionComponent implements OnInit {
  private secciones:Seccion[];
  private model:string;
  private aux:string;
  @Output() selecSeccion = new EventEmitter<string>();
  constructor(
    private _seccion:SeccionService
  ) { }

  ngOnInit() {
    this.getSeccion();
    this.model='';
  }
  getSeccion():void{
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }
  
  selectSeccion(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarSeccion(){
    this.model=this.aux;
    this.selecSeccion.emit(this.model);
  }
}
