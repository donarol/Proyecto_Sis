import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-menu-opciones-administrador',
  templateUrl: './menu-opciones-administrador.component.html',
  styleUrls: ['./menu-opciones-administrador.component.css']
})
export class MenuOpcionesAdministradorComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Inicio',ruta:'/homeAdministrador'},
    {etiqueta:'Mi Cuenta',ruta:'/cuentaAdministrador'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'},
    {etiqueta:'Configuraciones',ruta:'/cursos'},
    {etiqueta:'Inscribir Alumno',ruta:'/inscribirAlumno'},
    {etiqueta:'Menu',ruta:'/menu'}];
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
