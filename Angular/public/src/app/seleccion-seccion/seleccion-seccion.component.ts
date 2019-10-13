import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../servicios/seccion.service';
import { Seccion } from '../modelos/Seccion';

@Component({
  selector: 'app-seleccion-seccion',
  templateUrl: './seleccion-seccion.component.html',
  styleUrls: ['./seleccion-seccion.component.css']
})
export class SeleccionSeccionComponent implements OnInit {
  private secciones:Seccion[];
  constructor(
    private _seccion:SeccionService
  ) { }

  ngOnInit() {
    this.getSeccion();
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

}
