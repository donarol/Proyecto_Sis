import { Component, OnInit ,Input } from '@angular/core';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private pruebas:string[];
  @Input() curso_id:string;
  constructor(){
  }

  ngOnInit() {
   this.pruebas=['1'];
   console.log("Cargar los alumnos del curso con id: "+this.curso_id);
    for (let index = 0; index < parseInt(this.curso_id); index++) {
      this.pruebas.push(''+index); 
    }
  }
}
