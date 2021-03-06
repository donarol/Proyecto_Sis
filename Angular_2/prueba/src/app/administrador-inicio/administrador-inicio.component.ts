import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { User } from '../modelos/User';
@Component({
  selector: 'app-administrador-inicio',
  templateUrl: './administrador-inicio.component.html',
  styleUrls: ['./administrador-inicio.component.css']
})
export class AdministradorInicioComponent implements OnInit {
  private administradores:User[];
  private imagenName:string;
  constructor(
    private _administrador:AdministradorService
  ) { }

  ngOnInit() {
    this.cargaLista();
  }
  cargaLista():void{
    this._administrador.getAdministradores().subscribe(res=>{
      console.log("res");
      console.log(res);
      console.log("lista");
      this.imagenName="admin.png";
      this.administradores=res;
      console.log(this.administradores);
    })
  }
//npm run ng serve --open   
}
