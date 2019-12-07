import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuraciones-administrador',
  templateUrl: './configuraciones-administrador.component.html',
  styleUrls: ['./configuraciones-administrador.component.css']
})
export class ConfiguracionesAdministradorComponent implements OnInit {
  private componentes:any[]=[
  {ruta:"cursos",etiqueta:"Cursos"},
  {ruta:"secciones",etiqueta:'Secciones'},
  {ruta:"turnos",etiqueta:"Turnos"},
  {ruta:"camaras",etiqueta:"Camaras"},
  {ruta:"administrador_inicio",etiqueta:"Administradores"}];
  
  private isMuestra:Boolean;  
  constructor(
    private _user:UserService,
    private _router:Router
  ) { }

  ngOnInit() {
    this.isAdministrador();
  }
  isAdministrador(){
    this._user.getUserActual().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      if(res.tipo==='Administrador' || res.tipo==='Docente'){
        console.log("es administrador");
        this.isMuestra=true;
      }else{
        console.log("no es administrador");
        alert("Usted no es administrador");
        this.isMuestra=false;
        this._router.navigate(['']);
      }
    });
  }
}
