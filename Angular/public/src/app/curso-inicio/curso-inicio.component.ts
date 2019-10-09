import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {
  private componentes:Array<any>=[
  {router:"cursos_nuevo",etiqueta:"Nuevo Curso"},
  {router:"cursos_configurar",etiqueta:"Configurar Curso"},
  {router:"",etiqueta:"Borrar Curso"}];
  constructor() { }

  ngOnInit() {
  }

}
