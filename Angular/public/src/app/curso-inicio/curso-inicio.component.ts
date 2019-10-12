import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-inicio',
  templateUrl: './curso-inicio.component.html',
  styleUrls: ['./curso-inicio.component.css']
})
export class CursoInicioComponent implements OnInit {
  componentes:Array<any>=[
  {router:"cursoNuevo",etiqueta:"Nuevo Curso"},
  {router:"cursoModificar",etiqueta:"Configurar Cursos"},
  {router:"cursoBorrar",etiqueta:"Cursos Borrados"}];
  constructor() { }

  ngOnInit() {
  }

}
