import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Inicio',ruta:'/admin/1'},
    {etiqueta:'Mi Cuenta',ruta:'/adminCuenta/1'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'/*falta el id del user*/ },
    {etiqueta:'Configuraciones',ruta:'/turnos'},
    {etiqueta:'Inscribir Alumno',ruta:'/inscribir_alumno'}];
    componentes_0:Array<any>=[{etiqueta:"Cerrar Sesion"}];
  constructor(
    private _router:Router
  ) { }

  ngOnInit() {
  }
  cerrar(){
    this._router.navigate([``]);
  }

}
