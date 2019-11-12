import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { Alumno } from '../modelos/Alumno';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  private curso:Curso;
  private alumnos:Alumno[];
  private errors:Errores[];
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
  @Output() selectAlumno = new EventEmitter<Alumno>();
  constructor(
    private _curso:CursoService
  ){
  
  }

  ngOnInit() {
    this.alumnos=[];
    this.errors=[];
    this.geterrors();
    
    //this.getAlumnos();
  }
  getAlumnos():void{
    this._curso.getAlumnos(this.curso).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.alumnos=res;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
    });
  }
  verAlumno(alumno:Alumno){
    this.selectAlumno.emit(alumno);
  }
  geterrors():void{
    this.errors.push(new Errores("error al cargar los alumnos"));
  }
}
