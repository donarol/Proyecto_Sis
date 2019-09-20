import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-familiar',
  templateUrl: './menu-familiar.component.html',
  styleUrls: ['./menu-familiar.component.css']
})
export class MenuFamiliarComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Inicio',ruta:'/userInicio/1'},
    {etiqueta:'Mi Cuenta',ruta:'/userCuenta/1'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'/*falta el id del user*/ },
    {etiqueta:'Mis Pagos',ruta:'/pagos'}];
    componentes_0:Array<any>=[{logo:"url",etiqueta:"Cerrar Sesion",id:'pp'}];
  constructor() { }

  ngOnInit() {
  }

}
