import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { Administrador } from '../modelos/Administrador';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {
  private model:Administrador;
  constructor(
    private _loginServices:LoginService,
    private _router:Router
  ) { }
  login(){
    console.log("entro login");
    console.log("correo: "+this.model.correo);
    console.log("password: "+this.model.contrasena);
    
    this._loginServices.loginAdministrador(this.model).subscribe(res=>{
      var modelo:Administrador=res;
      console.log("mi modelo");
      console.log(modelo);
      this._router.navigate([`/adminCuenta/${modelo.administrador_id}`]);
    });
  }
  ngOnInit() {
    this.model=new Administrador();
  }

}
