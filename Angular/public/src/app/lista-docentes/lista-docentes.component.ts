import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../modelos/Curso';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {
  private curso:Curso;
  @Input('CursoEnvio') set _familiar_(valor:Curso){
    
    this.curso=new Curso;
    if(valor===undefined || valor == null){
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.curso=valor;
    }

  };
  constructor(){
  }

  ngOnInit() {
  }
}
