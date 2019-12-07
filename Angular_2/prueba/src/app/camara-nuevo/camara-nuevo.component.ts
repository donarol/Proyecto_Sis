import { Component, OnInit } from '@angular/core';
import { Camara } from '../modelos/Camara';
import { Errores } from '../modelos/Errores';
import { CamaraService } from '../servicios/camara.service';
import { Curso } from '../modelos/Curso';
import { NgForm } from '@angular/forms';
import { CamaraCursoService } from '../servicios/camara-curso.service';
import { Camara_Curso } from '../modelos/Camara_Curso';

@Component({
  selector: 'app-camara-nuevo',
  templateUrl: './camara-nuevo.component.html',
  styleUrls: ['./camara-nuevo.component.css']
})
export class CamaraNuevoComponent implements OnInit {
  private camara:Camara;
  private spinner:Boolean;
  private errors:Errores[];
  private curso:Curso;
  constructor(
    private _camara:CamaraService,
    private _camaraCurso:CamaraCursoService
  ) {}

  ngOnInit() {
    this.errors=[];
    this.camara=new Camara;
    this.curso=new Curso;
    this.setErrors();
  }
  //JUEVES 12 TIC
  
  SelecCurso(curso:Curso){
    console.log("me llego Curso: ");
    console.log(curso);
    this.curso=curso;
  }
  crearCamara(form:NgForm){

    console.log(form);
    if(form.valid){
      this.spinner=true;
      this.camara.address=`http://${this.camara.address}:8080/browserfs.html`;
      this._camara.addCamara(this.camara).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        var camaraCurso:Camara_Curso=new Camara_Curso;
        camaraCurso.camara_id=res.camara_id;
        camaraCurso.curso_id=this.curso.curso_id;
        this.addCamaraCurso(camaraCurso);
        this.spinner=false;
        this.errors[3].getError();
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
        this.errors[0].getError();
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.address.status==='INVALID')
        this.errors[2].getError();
    }
    
  }
  addCamaraCurso(camaraCurso:Camara_Curso):void{
    this.spinner=true;
    this._camaraCurso.addCamaraCurso(camaraCurso).subscribe(res_1=>{
      console.log("mi res");
      console.log(res_1);
      this.spinner=false;          
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
    });
  }
  

  setErrors():void{
    this.errors.push(new Errores('Error al crear la Camara'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar una direccion'));//2

    this.errors.push(new Errores('La camara se creo exitosamente'));//3
  }

}
