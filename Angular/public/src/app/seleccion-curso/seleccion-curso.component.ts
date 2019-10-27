import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { CursoService } from '../servicios/curso.service';

@Component({
  selector: 'app-seleccion-curso',
  templateUrl: './seleccion-curso.component.html',
  styleUrls: ['./seleccion-curso.component.css']
})
export class SeleccionCursoComponent implements OnInit {
  @Input('idSeguro') private idSeguro;
  private cursos:Curso[];
  private model:Curso;
  private aux:string;
  private spinnerCurso:Boolean;
  private cursoDatos:Curso;
  @Output() selecCurso = new EventEmitter<Curso>();
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.model= new Curso;
    this.spinnerCurso=false;
    this.cursoDatos=new Curso;
    this.getCursos();
  }
  selectCurso(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
    if(this.getCurso(this.aux)===undefined){
      console.log("es undefined");
    }else{
      console.log("se enviara");
      this.model=this.getCurso(this.aux);
      console.log(this.model);
    }
  }

  enviarCurso(){
    if(this.getCurso(this.aux)===undefined || this.getCurso(this.aux)==null){
      console.log("el valor es nulo no se enviara nada");
    }else{
      console.log("se enviara ");
      this.model = this.getCurso(this.aux);
      this.selecCurso.emit(this.model);
    }
   /* if(this.getCurso(this.aux)!=null){
    }else{
    }*/
  }
  getCurso(id:String){
    for (let index = 0; index < this.cursos.length; index++) {
      if(this.cursos[index].curso_id==id)
        return this.cursos[index]; 
    }
    return undefined;   
  }  


  getCursos():void{
    this.spinnerCurso=true;
    this._curso.getCursos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.cursos=res;
      this.spinnerCurso=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerCurso=false;
    });
  }
  

}
