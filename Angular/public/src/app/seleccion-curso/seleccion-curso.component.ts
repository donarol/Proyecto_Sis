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
  @Output() selecCurso = new EventEmitter<Curso>();
  constructor(
    private _curso:CursoService
  ) {}

  ngOnInit() {
    this.getCursos();
    this.model= new Curso;
  }
  selectCurso(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarCurso(){
    if(this.getCurso(this.aux)!=null){
      console.log("se enviara ");
      this.model = this.getCurso(this.aux);
      this.selecCurso.emit(this.model);
    }else{
      console.log("el valor es nulo no se enviara nada");
    }
  }
  getCurso(id:String){
    console.log("se recibe: "+id);
    for (let index = 0; index < this.cursos.length; index++) {
      console.log("se ve "+this.cursos[index].curso_id);
      if(this.cursos[index].curso_id==id){
        console.log("entro en "+this.cursos[index].curso_id);
        return this.cursos[index];
      }
      
    }
    return null;   
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
