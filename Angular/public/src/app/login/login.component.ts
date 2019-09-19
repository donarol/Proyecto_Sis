import { Component, OnInit } from '@angular/core';
//import {LoginService} from '../servicios/login.service';
import { from } from 'rxjs';
import { Familiar } from '../modelos/Familiar';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private model:Familiar;
  constructor(
    private _loginServices:LoginService,
    private _router:Router
  ){}
  login(){
    this._loginServices.loginTutor(this.model).subscribe(res=>{
      console.log(res);
      this._router.navigate([`/userInicio/${res.familiar_id}`]);
    });
  }

  ngOnInit() {
    this.model=new Familiar();
  }

}
