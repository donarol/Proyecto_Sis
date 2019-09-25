import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Administrador } from '../modelos/Administrador';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-administrador',
  templateUrl: './cuenta-administrador.component.html',
  styleUrls: ['./cuenta-administrador.component.css']
})
export class CuentaAdministradorComponent implements OnInit {
  private model:Administrador;
  private imagenName:string;
  private href: string = "";
  private id:string="";
  constructor(
    private _administradorService:AdministradorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.model=new Administrador;
    this.href = this.router.url;
    console.log(this.router.url);
    this.id=this.split();
    console.log(this.id);

    this._administradorService.getAdministrador(this.id).subscribe(res=>{
      console.log("res");
      console.log(res);
      this.model=res;
      console.log("model");
      console.log(this.model);
      this.imagenName='admin.png';
    });
  }
  guardar(){
    console.log("guardar");
    this._administradorService.updateAdministrador(this.id,this.model).subscribe(res=>{
      console.log("res");
      console.log(res);
      alert("Datos Actualizados Exitosamente");
    });
  }
  split(){
    let s:string[]=this.href.split('/');
    return s[2];
  }

}
