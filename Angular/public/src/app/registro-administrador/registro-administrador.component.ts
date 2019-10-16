import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/User';
import { LoginService } from '../servicios/login.service';
import { Errores } from '../modelos/Errores';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  private administrador:User;
  private variable:boolean;
  private errors:Errores[]=[];
  constructor(
    private _administrador:LoginService
  ){}

  ngOnInit() {
    this.administrador=new User();
    this.variable=true;
    this.administrador.tipo='Administrador';
    this.setErrors();
    console.log("mis errroes");
    console.log(this.errors);
  }
  onChangeVariable(){
    console.log("se cambio: "+this.variable)
    if(this.variable)
      this.administrador.tipo='Administrador';
    else
      this.administrador.tipo='Docente';
  }

  registro(form:NgForm){
    console.log(form);
    if(form.valid && this.equals()){
      console.log("---REGISTRO---");
      console.log(this.administrador);
      console.log("------");
      this._administrador.create(this.administrador).subscribe(res=>{
        console.log(res);
        alert("Registro Exitoso");
        this.administrador=new User;
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
      if(!this.equals())
        this.errors[7].getError();
    }

  }
  equals():boolean{
    if(this.administrador.password===this.administrador.password_confirmation)
      return true;
    return false;
  }

  /*onchangePassword(deviceValue){
    console.log(deviceValue.target.value);
    
  }*/
  /*onchangePassword(event) { 
    var key = event.which || event.keyCode; 
    console.log(key);
    console.log(event);
   } */
   
  setErrors(){
    this.errors.push(new Errores('Error al Ingresar los Datos'));
    this.errors.push(new Errores('Error al Ingresar el Nombre'));
    this.errors.push(new Errores('Error al Ingresar el Apellido'));
    this.errors.push(new Errores('Error al Ingresar el Carnet'));
    this.errors.push(new Errores('Error al Ingresar los Telefono'));
    this.errors.push(new Errores('Correo Electronico no Valido'));
    this.errors.push(new Errores('Error al Ingresar la Contraseña'));
    this.errors.push(new Errores('Las Contraseñas no se Iguales'));
  }
  

}
