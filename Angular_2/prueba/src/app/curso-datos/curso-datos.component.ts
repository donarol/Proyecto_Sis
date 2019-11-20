import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-curso-datos',
  templateUrl: './curso-datos.component.html',
  styleUrls: ['./curso-datos.component.css']
})
export class CursoDatosComponent implements OnInit {
  cursos:Curso[];
  private errors:Errores[];
  constructor(
    private _curso:CursoService,
    private _user:UserService,
    private _router:Router
  ){}

  ngOnInit() {
    this.errors=[];
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
    });
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
  setErrors():void{
    this.errors.push(new Errores('Error en los datos del Curso'));
    
  }
}
