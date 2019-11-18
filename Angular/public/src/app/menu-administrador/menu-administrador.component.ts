import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
  //SOLO SE CAMBIO EL MENU DEL ADMINITRADOR
  private componentes:any[]=[
    {ruta:"menuAdministrador",etiqueta:"Menu"},
    {ruta:"menuNuevo",etiqueta:'Nuevo Plato'},
  /*{ruta:"menuModificar",etiqueta:"Modificar Plato"}*/];  
    
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
