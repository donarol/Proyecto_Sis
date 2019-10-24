import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
  //SOLO SE CAMBIO EL MENU DEL ADMINITRADOR
  private componentes:any[]=[
    {ruta:"menuAdministrador",etiqueta:"Menu"},
    {ruta:"menuNuevo",etiqueta:'Nuevo Plato'},
    {ruta:"menuModificar",etiqueta:"Modificar Plato"}];  
  constructor(

  ) { }

  ngOnInit() {
  }


}
