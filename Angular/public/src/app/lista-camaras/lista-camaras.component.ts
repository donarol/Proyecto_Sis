import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../modelos/Curso';

@Component({
  selector: 'app-lista-camaras',
  templateUrl: './lista-camaras.component.html',
  styleUrls: ['./lista-camaras.component.css']
})
export class ListaCamarasComponent implements OnInit {
  @Input('CursoEnvio') private curso:Curso;
  constructor(){
  }

  ngOnInit() {
  }
}
