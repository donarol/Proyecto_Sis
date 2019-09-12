import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private componentesMenu:Array<any>=[
    {etiqueta:'Mi Cuenta',ruta:'/miCuenta/6'},
    {etiqueta:'Mis Mensajes',ruta:'/mensajes'/*falta el id del user*/ },
    {etiqueta:'Mis Pagos',ruta:'/pagos'},
    {etiqueta:'Cursos',ruta:'/lista'}];
    componentes_0:Array<any>=[{logo:"url",etiqueta:"Cerrar Sesion",id:'pp'}];
  constructor() { }

  ngOnInit() {
  }
  funcion(){
    console.log("es clic");
  }

}
