import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../modelos/Curso';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {
  @Input('CursoEnvio') private curso:Curso;
  constructor(){
  }

  ngOnInit() {
  }
}
