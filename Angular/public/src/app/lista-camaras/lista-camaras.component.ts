import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lista-camaras',
  templateUrl: './lista-camaras.component.html',
  styleUrls: ['./lista-camaras.component.css']
})
export class ListaCamarasComponent implements OnInit {
  private pruebas:string[];
  @Input() curso_id:string;
  constructor(){
  }

  ngOnInit() {
   this.pruebas=['1','2','3'];
   console.log("Cargar los camaras del curso con id: "+this.curso_id);
  }
}
