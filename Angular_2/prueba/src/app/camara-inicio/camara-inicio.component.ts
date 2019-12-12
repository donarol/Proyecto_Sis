import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camara-inicio',
  templateUrl: './camara-inicio.component.html',
  styleUrls: ['./camara-inicio.component.css']
})
export class CamaraInicioComponent implements OnInit {
  private componentes:Array<any>=[
    {router:"camaraNuevo",etiqueta:"Nueva Camara"},
    {router:"camaraModificar",etiqueta:"Configurar Camara"}];
  constructor() { }

  ngOnInit() {
  }

}
