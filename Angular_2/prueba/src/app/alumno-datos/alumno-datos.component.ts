import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-alumno-datos',
  templateUrl: './alumno-datos.component.html',
  styleUrls: ['./alumno-datos.component.css']
})
export class AlumnoDatosComponent implements OnInit {
  private componentes:any[]=[
    {ruta:"menuAdministrador",etiqueta:"Menu"},
    {ruta:"menuNuevo",etiqueta:'Nuevo Plato'},
  /*{ruta:"menuModificar",etiqueta:"Modificar Plato"}*/];  
  constructor(
    private rutaActiva:ActivatedRoute
  ) { }

  ngOnInit() {
  }



}
