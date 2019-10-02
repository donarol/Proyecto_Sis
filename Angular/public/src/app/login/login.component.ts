import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../modelos/User';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import { UserService } from '../servicios/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private model:User;z
  constructor(
    private _loginServices:LoginService,
    private _router:Router,
    private _user:UserService
  ){}
  login(){
    this._loginServices.login(this.model).subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      localStorage.setItem('accto',res.access_token);
      this._user.getUserActual().subscribe(res=>{
        console.log("Mi res 2");
        console.log(res);
        if(res.tipo==='Familiar')
          this._router.navigate(['homeFamiliar']);
        else
          this._router.navigate(['homeAdministrador']);
      })
      //sessionStorage.setItem();
    //  this._router.navigate([`/userInicio/${res.id}`]);
    //  this._router.navigate(['homeFamiliar']);
    });
  }

  ngOnInit() {
    this.model=new User();
  }

}
