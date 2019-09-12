import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Administrador } from '../modelos/Administrador';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {
  private model:Administrador;
  constructor(
    //private _loginServices:LoginService
  ) { }
  login(){
    console.log("entro login");
    console.log("correo: "+this.model.correo);
    console.log("password: "+this.model.contrasena);
    /*
    this._loginServices.loginAdministrador(this.model).subscribe(res=>{

    });*/
  }
  ngOnInit() {
    this.model=new Administrador();
  }

}
