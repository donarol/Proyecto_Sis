import { Component, OnInit,Input } from '@angular/core';
import { Curso } from '../modelos/Curso';
import { Camara } from '../modelos/Camara';
import { CursoService } from '../servicios/curso.service';
import { Errores } from '../modelos/Errores';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-lista-camaras',
  templateUrl: './lista-camaras.component.html',
  styleUrls: ['./lista-camaras.component.css']
})
export class ListaCamarasComponent implements OnInit {
  private curso:Curso;
  private spinner:Boolean;
  private camaras:Camara[];
  private errors:Errores[];
  a="192.168.0.12";
    
  @Input('CursoEnvio') set _familiar_(valor:Curso){
    this.spinner=false;
    this.curso=new Curso;
    if(valor===undefined || valor == null){
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.curso=valor;
      this.getCamaras(valor);
    }

  };
  constructor(
    private _curso:CursoService,
    public sanitizer: DomSanitizer
  ){}

  ngOnInit() {
    this.errors=[];
    this.setErrors();
  }
  getCamaras(curso:Curso):void{
    this.spinner=true;
    this._curso.getCamaras(curso).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.camaras=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
      this.errors[0].getError();
    });
  }
  setErrors():void{
    this.errors.push(new Errores('Error al cargar las camaras'));
  }
}
