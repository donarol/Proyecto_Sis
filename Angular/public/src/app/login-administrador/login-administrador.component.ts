import { Component, OnInit } from '@angular/core';
import { LoginTutorService } from '../servicios/login-tutor.service';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {
  private correo:string;
  private password:string;
  constructor(
    private _loginServices:LoginTutorService
  ) { }
  login(){
    console.log("entro login");
    console.log("correo: "+this.correo);
    console.log("password: "+this.password);
    this._loginServices.login(this.correo,this.password);
  }
  ngOnInit() {
    this.correo='';
    this.password='';
  }

}
