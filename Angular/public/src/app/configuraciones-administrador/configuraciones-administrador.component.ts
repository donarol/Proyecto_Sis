import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuraciones-administrador',
  templateUrl: './configuraciones-administrador.component.html',
  styleUrls: ['./configuraciones-administrador.component.css']
})
export class ConfiguracionesAdministradorComponent implements OnInit {
  private   componentes:any[]=[
  {ruta:"cursos",etiqueta:"Curso"},
  {ruta:"secciones",etiqueta:'Seccion'},
  {ruta:"turnos",etiqueta:"Turno"},
  {ruta:"administrador_inicio",etiqueta:"Administrador"}];  
  constructor() { }

  ngOnInit() {
  }

}
