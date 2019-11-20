import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { Errores } from '../modelos/Errores';
import { User } from '../modelos/User';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.css']
})
export class ListaDocentesComponent implements OnInit {
  private spinner:Boolean;
  private errors:Errores[];
  private model:User;
  @Input('CursoEnvio') set _familiar_(valor:Curso){
    this.spinner=false;
    this.model=new User;
    if(valor!==undefined || valor !== null){
      console.log("me llego");
      console.log(valor);
      this.getDocente(valor);
    }else
      console.log("es nulo");
  };
  constructor(
    private _curso:CursoService
  ){
  }

  ngOnInit() {
    this.model=new User;
    this.errors=[];
    this.getErrors();
  }
  getDocente(curso:Curso):void{
    this.spinner=true;
    this._curso.getDocente(curso.curso_id).subscribe(res=>{
      console.log("res");
      console.log(res);
      this.model=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
      this.spinner=false;
    });
  }
  getErrors():void{
    this.errors.push(new Errores('Error al cargar al docente'));
  }
}
