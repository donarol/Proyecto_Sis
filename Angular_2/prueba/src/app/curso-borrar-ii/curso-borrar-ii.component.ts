import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { Errores } from '../modelos/Errores';
import { User } from '../modelos/User';
import { Turno } from '../modelos/Turno';
import { Seccion } from '../modelos/Seccion';
import { CursoService } from '../servicios/curso.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-curso-borrar-ii',
  templateUrl: './curso-borrar-ii.component.html',
  styleUrls: ['./curso-borrar-ii.component.css']
})
export class CursoBorrarIiComponent implements OnInit {
  @Output() selectCurso = new EventEmitter<String>();
  @Input('CursoEnvio') set _curso_(valor:Curso){
    
    this.curso=new Curso;
    this.administrador=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    if(valor===undefined || valor == null || valor.curso_id==""){
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.curso=valor;
      this.getDocente();
      this.getSeccion();
      this.getTurno();
      this.aux_id=valor.curso_id.toString();
      this.aux_nombre=valor.nombre.toString();
    }
  
  };
  private errors:Errores[]=[];
  private spinner:boolean;
  private spinnerDocente:boolean;
  private spinnerSeccion:boolean;
  private spinnerTurno:boolean;
  private administrador:User;
  private turno:Turno;
  private seccion:Seccion;
  private curso:Curso;
  private aux_id:String;
  private aux_nombre:String;
  constructor(
    private _curso:CursoService
  ) { }

  ngOnInit() {
    this.spinner=false;
    this.spinnerDocente=false;
    this.spinnerSeccion=false;
    this.spinnerTurno=false;
    this.curso=new Curso;
    this.administrador=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    this.setErrors();
  }
  getDocente():void{
    this.spinnerDocente=true;
    this._curso.getDocente(this.curso.curso_id).subscribe(res=>{
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
  getSeccion():void{
    this.spinnerSeccion=true;
    this._curso.getSeccion(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.seccion=res;
      this.spinnerSeccion=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerSeccion=false;
    });
  }
  getTurno():void{
    this.spinnerTurno=true;
    this._curso.getTurno(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      
      this.curso.gestion=this.turno.gestion;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
    });
  }  
  setErrors():void{
    this.errors.push(new Errores('Error al borrar el Curso'));
  }
  BorrarCurso(){
    console.log("se borrara");
    console.log(this.aux_id);
    this.selectCurso.emit(this.aux_id);
  }
}
