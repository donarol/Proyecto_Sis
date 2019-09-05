import { Component, OnInit } from '@angular/core';
import {LoginTutorService} from './../servicios/login-tutor.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private correo:string;
  private password:string;
  constructor(
    private _loginServices:LoginTutorService
  ){}
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
