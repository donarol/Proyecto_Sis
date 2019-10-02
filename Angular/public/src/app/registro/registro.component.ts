import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/User';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private familiar:User;
  private error:boolean[]=[false,false,false,false,false,false,false];
  constructor(
    private _familiar:LoginService
  ) { }

  ngOnInit() {
    this.familiar=new User();
  }
  registro(){
    console.log("---REGISTRO---");
    console.log(this.familiar);
    console.log("------");
      this._familiar.create(this.familiar).subscribe(res=>{
        console.log(res);
        alert("Registro Exitoso");
      });
  }

}
