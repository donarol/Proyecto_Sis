import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';
import { Turno } from '../modelos/Turno';
import { User } from '../modelos/User';
import { Seccion } from '../modelos/Seccion';

@Component({
  selector: 'app-seleccion-curso-ii',
  templateUrl: './seleccion-curso-ii.component.html',
  styleUrls: ['./seleccion-curso-ii.component.css']
})
export class SeleccionCursoIiComponent implements OnInit {
  @Input('curso') set _familiar_(valor:Curso){
    
    this.curso=new Curso;
    this.docente=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    if(valor===undefined || valor == null){
      this.ver=false;
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.curso=valor;
      this.getDocente();
      this.getSeccion();
      this.getTurno();
      this.ver=true;

    }

  };
  private ver:Boolean;
  private curso:Curso;
  private turno:Turno;
  private docente:User;
  private seccion:Seccion;
  private spinnerTurno:Boolean;
  private spinnerDocente:Boolean;
  private spinnerSeccion:Boolean;
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.ver=false;
    this.curso=new Curso;
    this.docente=new User;
    this.turno=new Turno;
    this.seccion=new Seccion;
    this.spinnerDocente=false;
    this.spinnerSeccion=false;
    this.spinnerTurno=false;
  }

  getTurno():void{
    this.spinnerTurno=true;
    this._curso.getTurno(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.turno=res;
      this.spinnerTurno=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerTurno=false;
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
  getDocente():void{
    this.spinnerDocente=true;
    this._curso.getDocente(this.curso.curso_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.docente=res;
      this.spinnerDocente=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerDocente=false;
    });
  }
}
