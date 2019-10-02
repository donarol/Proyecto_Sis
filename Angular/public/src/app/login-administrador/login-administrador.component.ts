import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servicios/login.service';
import { User } from '../modelos/User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {
  private model:any;
  private recordar:boolean;
  constructor(
    private _loginServices:LoginService,
    private _router:Router
  ) { }
  login(){
    console.log("entro login");
    console.log("correo: "+this.model.email);
    console.log("password: "+this.model.password);
    console.log("recordar: "+this.model.recordar);
    
    this._loginServices.login(this.model).subscribe(res=>{
     // var modelo:User=res;
      console.log("mi res");
      console.log(res);
      //console.log(modelo);
      localStorage.setItem('accto',res.access_token);
     // res.access_token;
     // this._router.navigate([`/adminCuenta/${modelo.id}`]);
      this._router.navigate(['/homeAdministrador']);
    });
  }
  ngOnInit() {
    this.recordar=false;
    this.model=new User();
  }

}
