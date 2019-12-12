import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CamaraService } from '../servicios/camara.service';
import { Camara } from '../modelos/Camara';
import { Errores } from '../modelos/Errores';

import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-camara-datos',
  templateUrl: './camara-datos.component.html',
  styleUrls: ['./camara-datos.component.css']
})
export class CamaraDatosComponent implements OnInit {
  private camara:Camara;
  private spinner:Boolean;
  private errors:Errores[];
  constructor(
    private rutaActiva:ActivatedRoute,
    private _camara:CamaraService,
    
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.camara=new Camara;
    this.spinner=false;
    this.errors=[];
    this.getCamara(this.rutaActiva.snapshot.params.id);
  }
  getCamara(id:string){
    this.spinner=true;
    this._camara.getCamara(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.camara=res;
      this.spinner=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
    });
  }
  setErrors():void{
    this.errors.push(new Errores('Error al cargar la camara'));
  }
}
