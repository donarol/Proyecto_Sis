import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private pruebas:string[]=['1','2','3','4','5','6','7','8'];
  constructor() { }

  ngOnInit() {
  }

}
