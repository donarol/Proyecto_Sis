import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { Administrador } from '../modelos/Administrador';

@Component({
  selector: 'app-cuenta-administrador',
  templateUrl: './cuenta-administrador.component.html',
  styleUrls: ['./cuenta-administrador.component.css']
})
export class CuentaAdministradorComponent implements OnInit {
  private model:Administrador;
  constructor(
    private _administradorService:AdministradorService
  ) {}

  ngOnInit() {
    this.model=new Administrador;
    this._administradorService.getAdministrador(2).subscribe(res=>{
      console.log("res");
      console.log(res);
      this.model=res;
      console.log("model");
      console.log(this.model);
    })
  }

}
