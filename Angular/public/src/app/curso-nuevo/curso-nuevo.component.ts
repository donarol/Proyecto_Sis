import { Component, OnInit } from '@angular/core';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';
import { CursoService } from '../servicios/curso.service';
import { User } from '../modelos/User';
import { UserService } from '../servicios/user.service';
import { SeccionService } from '../servicios/seccion.service';

@Component({
  selector: 'app-curso-nuevo',
  templateUrl: './curso-nuevo.component.html',
  styleUrls: ['./curso-nuevo.component.css']
})
export class CursoNuevoComponent implements OnInit {
  private errors:Errores[]=[];
  private spinner:boolean;
  private spinnerDocente:boolean;
  private spinnerSeccion:boolean;
  private spinnerTurno:boolean;
  private administrador:User;
  constructor(
    private _curso:CursoService,
    private _administrador:UserService,
    private _seccion:SeccionService
  ) {}

  ngOnInit() {
    this.setErrors();
    this.spinner=false;
    this.spinnerDocente=false;
    this.spinnerSeccion=false;
    this.spinnerTurno=false;
    this.administrador=new User;
   // this._curso.addCurso();
  }


  setErrors():void{
    this.errors.push(new Errores('Error al crear el Curso'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar el Docente'));
    this.errors.push(new Errores('Error al ingresar la Seccion'));
    this.errors.push(new Errores('Error al ingresar el Turno'));
    this.errors.push(new Errores('Error al ingresar la Gestion'));
  }
  SelecDocente(id:string){
    console.log("me llego ");
    console.log(id);
    this.spinnerDocente=true;
    this._administrador.getUser(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.administrador=res;
      this.spinnerDocente=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerDocente=false;
    });
  }
  SelecSeccion(id:string){
    
  }
}
