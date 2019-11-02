import { Component, OnInit } from '@angular/core';
import { Seccion } from '../modelos/Seccion';
import { Turno } from '../modelos/Turno';
import { TurnoService } from '../servicios/turno.service';
import { SeccionService } from '../servicios/seccion.service';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.css']
})
export class HomeAdministradorComponent implements OnInit {
  private turnos:Turno[];
  private secciones:Seccion[];
  private cursos:Curso[];
  private spinnerTurno:Boolean;
  private spinnerSeccion:Boolean;
  private model:Curso;
  constructor(
    private _turno:TurnoService,
    private _seccion:SeccionService,
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.spinnerTurno=false;
    this.spinnerSeccion=false;
    this.turnos=[];
    this.secciones=[];
    this.cursos=[];
    this.model=new Curso;
    this.getTurnos();
    this.getSecciones();
  }
  getTurnos():void{
    this.spinnerTurno=true;
    this._turno.getTurnos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turnos=res;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;

    });
  }
  getSecciones():void{
    this.spinnerSeccion=true;
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
      this.spinnerSeccion=false;
    },error=>{
      console.log("mi res");
      console.log(error);
      this.spinnerSeccion=false;
    });
  }
  getCursos(){
    if (this.model.seccion_id!='' || this.model.turno_id!=''){
      console.log("mi model");
      console.log(this.model);
      this._curso.getCursoLista(this.model).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.cursos=res;
      },error=>{
        console.log("mi error");
        console.log(error);
      });
    }else
      alert('Error en la Busqueda');
  }

}
