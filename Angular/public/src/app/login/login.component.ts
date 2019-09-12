import { Component, OnInit } from '@angular/core';
import {LoginService} from './../servicios/login.service';
import { from } from 'rxjs';
import { Familiar } from '../modelos/Familiar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private model:Familiar;
  constructor(
   // private _loginServices:LoginService,
   // private _router:Router
  ){}
  login(){
    console.log("entro login");
    console.log("correo: "+this.model.correo);
    console.log("password: "+this.model.contrasena);
    /*
    this._loginServices.loginTutor(this.model).subscribe(res=>{
      this._router.navigate([`/lista/${res.id}`]);
    });*/
  }

  ngOnInit() {
    this.model=new Familiar();
  }

}
