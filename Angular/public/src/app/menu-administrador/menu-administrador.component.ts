import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Inicio',ruta:'/homeAdministrador'},
    {etiqueta:'Mi Cuenta',ruta:'/cuentaAdministrador'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'},
    {etiqueta:'Configuraciones',ruta:'/turnos'},
    {etiqueta:'Inscribir Alumno',ruta:'/inscribir_alumno'}];
    componentes_0:Array<any>=[{etiqueta:"Cerrar Sesion"}];
  constructor(
    private _router:Router,
    private _login:LoginService
  ) { }

  ngOnInit() {
  }
  cerrar(){
    this._login.logout().subscribe(res=>{
      localStorage.removeItem('accto');
      this._router.navigate([``]);
    });
  }

}
