import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-curso-borrar',
  templateUrl: './curso-borrar.component.html',
  styleUrls: ['./curso-borrar.component.css']
})
export class CursoBorrarComponent implements OnInit {
  cursos:Curso[];
  private errors:Errores[];
  private spinner:Boolean;
  private access:Boolean;
  constructor(
    private _curso:CursoService,
    private _user:UserService,
    private _router:Router
  ){}

  ngOnInit() {
    this.errors=[];
    this.spinner=false;
    this.access=true;
    this.setErrors();
    this.isAdministrador();
  }
  isAdministrador():void{
    this._user.getUserActual().subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      if(res.tipo==='Administrador'){
        console.log("es administrador");
        this.getCursos();
      }else{
        alert('Usted no es Administrador');
        this._router.navigate(['']);
      }
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[1].getError();
    });
  }
  getCursos():void{
    this.spinner=true;
    this._curso.getCursos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.cursos=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[0].getError();
    });
  }
  SelectCurso(id:String){
    console.log("Me llego ");
    console.log(id);
    this.spinner=true;
    this._curso.deleteCurso(this.cursos[this.verCurso(id)]).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.spinner=false;
      this.access=false;
      this.errors[3].getError();
      this.cursos.splice(this.verCurso(id),1);
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[2].getError();
    });
  }

  verCurso(id:String):number{
    for (let index = 0; index < this.cursos.length; index++) {
      if(id==this.cursos[index].curso_id)
        return index;
    }
  }
  setErrors():void{
    this.errors.push(new Errores('Error en los datos del Curso'));
    this.errors.push(new Errores('Error al verificar al Usuario'));
    this.errors.push(new Errores('Error al borrar el curso'));
    this.errors.push(new Errores('Curso Borrardo Exitosamente'));
  }
}
