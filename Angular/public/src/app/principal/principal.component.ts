import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Mi Cuenta',ruta:'/miCuenta'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'/*falta el id del user*/ },
    {etiqueta:'Mis Pagos',ruta:'/pagos'},
    {etiqueta:'Cerrar Sesion',ruta:'/logout'}];
  //AGREGAR LA LISTA DE LOS CURSOS
  constructor() { }

  ngOnInit() {
  }

}
