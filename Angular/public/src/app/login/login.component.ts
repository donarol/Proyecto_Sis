import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../modelos/User';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { UserService } from '../servicios/user.service';
import { NgForm } from '@angular/forms';
import { Errores } from '../modelos/Errores';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private errorEmail:Errores;
  private errorPassword:Errores;
  private error:Errores;
  private model:User;
  private spinner:boolean;
  constructor(
    private _loginServices:LoginService,
    private _router:Router,
    private _user:UserService
  ){}
  login(form:NgForm){
    console.log(form);
    if(form.valid){
      this.spinner=true;
      console.log("es valido");
      this._loginServices.login(this.model).subscribe(res=>{
        console.log("Mi res");
        console.log(res);
        localStorage.setItem('accto',res.access_token);
        this._user.getUserActual().subscribe(res=>{
          console.log("Mi res 2");
          console.log(res);
          this.spinner=false;
          if(res.tipo==='Familiar')
            this._router.navigate(['homeFamiliar']);
          else
            this._router.navigate(['homeAdministrador']);
        },error=>{
          console.log("el erro 2");
          console.log(error);
          this.spinner=false;
        });
        //sessionStorage.setItem();
      //  this._router.navigate([`/userInicio/${res.id}`]);
      //  this._router.navigate(['homeFamiliar']);
      }//,error=>this.error.getError());
        ,error=>{
          console.log("el error 1");
          console.log(error.message); 
          this.spinner=false;
        }
      );
    }else{
      console.log("no es valido");
      if(form.controls.password.status==='INVALID')
        this.errorPassword.getError();
      if(form.controls.email.status==='INVALID')
        this.errorEmail.getError();
      this.error.getError();   
    }
  }
  ngOnInit() {
    this.model=new User();
    this.errors();
    this.spinner=false;
  }
  errors(){
    this.error=new Errores('Error al Ingresar los Datos');
    this.errorEmail=new Errores('Correo Electronico no Valido');
    this.errorPassword=new Errores('Error al ingresar el password');
  }
}