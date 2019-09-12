import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {
  private pruebas:string[];
  @Input() curso_id:string;
  constructor(){
  }

  ngOnInit() {
   this.pruebas=['1','2','3'];
   console.log("Cargar los docentes del curso con id: "+this.curso_id);
  }
}
