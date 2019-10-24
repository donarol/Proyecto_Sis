import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-menu-familiar',
  templateUrl: './menu-familiar.component.html',
  styleUrls: ['./menu-familiar.component.css']
})
export class MenuFamiliarComponent implements OnInit {
  //SOLO SE CAMBIO EL MENU DEL ADMINITRADOR
  private componentesMenu:Array<any>=[
    {etiqueta:'Inicio',ruta:'/homeFamiliar'},
    {etiqueta:'Mi Cuenta',ruta:'/CuentaFamiliar'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'/*falta el id del user*/ },
    {etiqueta:'Mis Pagos',ruta:'/pagos'}];
    componentes_0:Array<any>=[{logo:"url",etiqueta:"Cerrar Sesion"}];
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
