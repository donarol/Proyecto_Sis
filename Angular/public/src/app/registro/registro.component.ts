import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/User';
import { LoginService } from '../servicios/login.service';
import { NgForm } from '@angular/forms';
import { Errores } from '../modelos/Errores';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private familiar:User;
  private errors:Errores[]=[];
  constructor(
    private _familiar:LoginService
  ){}

  ngOnInit() {
    this.familiar=new User();
    this.familiar.tipo="Familiar";
    this.setErrors();
  }
  registro(form:NgForm){
    console.log(form);
    if(form.valid && this.equals()){
      console.log("---REGISTRO---");
      console.log(this.familiar);
      console.log("------");
      this._familiar.create(this.familiar).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        alert("Registro Exitoso");
        this.familiar=new User();
      },error=>{
        console.log("mi error");
        console.log(error);
        alert("error en el registro");
      });
    }else{
      console.log("no es valido");
      if(form.controls.nombre.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.apellido.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.carnet.status==='INVALID')
        this.errors[3].getError();
      if(form.controls.telefono.status==='INVALID')
        this.errors[4].getError();
      if(form.controls.email.status==='INVALID')
        this.errors[5].getError();
      if(form.controls.password.status==='INVALID')
        this.errors[6].getError();
    }

  }
  equals():boolean{
    if(this.familiar.password===this.familiar.password_confirmation)
      return true;
    return false;
  }
  setErrors():void{
    this.errors.push(new Errores('Error al Ingresar los Datos'));
    this.errors.push(new Errores('Error al Ingresar el Nombre'));
    this.errors.push(new Errores('Error al Ingresar el Apellido'));
    this.errors.push(new Errores('Error al Ingresar el Carnet'));
    this.errors.push(new Errores('Error al Ingresar los Telefono'));
    this.errors.push(new Errores('Correo Electronico no Valido'));
    this.errors.push(new Errores('Error al Ingresar la Contraseña'));
    this.errors.push(new Errores('Las Contraseñas no se Identicas'));
  }
}
