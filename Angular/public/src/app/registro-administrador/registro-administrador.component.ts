import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/User';
import { LoginService } from '../servicios/login.service';
import { ValidacionService } from '../servicios/validacion.service';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  private administrador:User;
  private variable:boolean;
  private vista:string;
  private res;
  private error:boolean[]=[false,false,false,false,false,false,false];
  constructor(
    private _administrador:LoginService,
    private _validacion:ValidacionService
  ) { }

  ngOnInit() {
    this.administrador=new User();
    this.variable=true;
    this.administrador.tipo='Administrador';
  }
  onChangeVariable(){
    console.log("se cambio: "+this.variable)
    if(this.variable)
      this.administrador.tipo='Administrador';
    else
      this.administrador.tipo='Docente';
  }

  registro(){
    console.log("---REGISTRO---");
    console.log(this.administrador);
    console.log("------");
    this.error=this._validacion.validarUser(this.administrador);
    console.log("mi error ");
    console.log(this.error);
     /* this._administrador.create(this.administrador).subscribe(res=>{
        console.log(res);
        this.res=res;
        alert("Registro Exitoso");
      });*/
  }
  

}
