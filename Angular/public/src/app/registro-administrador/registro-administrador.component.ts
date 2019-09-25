import { Component, OnInit } from '@angular/core';
import { Administrador } from '../modelos/Administrador';
import { AdministradorService } from '../servicios/administrador.service';
import { RolService } from '../servicios/rol.service';
import { Rol } from '../modelos/Rol';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  private administrador:Administrador;
  private contrasena2:string;
  private roles:Rol[];
  private rol:string;
  constructor(
    private _administrador:AdministradorService,
    private _rol:RolService
  ) { }

  ngOnInit() {
    this.administrador=new Administrador();
    this.contrasena2='';
    this.cargaRol();
  }

  cargaRol(){
    this._rol.getRoles().subscribe(res=>{
      console.log("res");
      console.log(res);
      this.roles=res;
    });
  }
  registro(){
    console.log("---REGISTRO---");
    console.log(this.administrador);
    this.administrador.cargo=this.rol;
    console.log(this.contrasena2);
    console.log(this.rol);
    console.log("------");

    if(this.administrador.contrasena===this.contrasena2){
      this._administrador.addAdministrador(this.administrador).subscribe(res=>{
        console.log(res);
        alert("Registro Exitoso");
      });
    }else{
      console.log("las contrasenas no son identicas");
    }
  }

}
