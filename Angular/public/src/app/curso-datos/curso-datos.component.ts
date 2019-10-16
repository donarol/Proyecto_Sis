import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-curso-datos',
  templateUrl: './curso-datos.component.html',
  styleUrls: ['./curso-datos.component.css']
})
export class CursoDatosComponent implements OnInit {
  private cursos:Curso[];
  constructor(
    private _curso:CursoService
  ){}

  ngOnInit() {
    this.getCursos();
  }
  getCursos():void{
    this._curso.getCursos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.cursos=res;
    },error=>{
      console.log("mi error");
      console.log(error);
      alert("error al cargar los cursos");
    });
  }

}
