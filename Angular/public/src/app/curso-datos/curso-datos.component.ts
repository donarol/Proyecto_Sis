import { Component, OnInit } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-curso-datos',
  templateUrl: './curso-datos.component.html',
  styleUrls: ['./curso-datos.component.css']
})
export class CursoDatosComponent implements OnInit {
  private cursos:Curso[];
  constructor(
    private _curso:CursoService,
    private _user:UserService,
    private _router:Router
  ){}

  ngOnInit() {
    this.getCursos();
     
    this._user.getUserActual().subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      if(res.tipo==='Administrador'){
        console.log("es administrador");
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

}
