import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuraciones-administrador',
  templateUrl: './configuraciones-administrador.component.html',
  styleUrls: ['./configuraciones-administrador.component.css']
})
export class ConfiguracionesAdministradorComponent implements OnInit {
  private componentes:any[]=[
  {ruta:"cursos",etiqueta:"Cursos"},
  {ruta:"secciones",etiqueta:'Secciones'},
  {ruta:"turnos",etiqueta:"Turnos"},
  {ruta:"administrador_inicio",etiqueta:"Administradores"}];  
  constructor() { }

  ngOnInit() {
  }

}
