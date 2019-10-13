import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../modelos/User';
import { NgForm } from '@angular/forms';
import { Errores } from '../modelos/Errores';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-cuenta-administrador',
  templateUrl: './cuenta-administrador.component.html',
  styleUrls: ['./cuenta-administrador.component.css']
})
export class CuentaAdministradorComponent implements OnInit {
  private model:User;
  private imagenName:string;
  private href: string = "";
  private isUpdate:boolean;
  private spinner:boolean;
  private errors:Errores[]=[];
  constructor(
    private _user:UserService,
    private rutaActiva:ActivatedRoute
  ) {}

  ngOnInit() {
    this.model=new User;
    this.isUpdate=false;
    this.spinner=true;
    this.setErrors();
    this.verifica();
    this.cargaUser();
  }
  guardar(form:NgForm){
    console.log(form);
    if(form.valid){
      this.spinner=true;
      console.log("es valido");
      this._user.updateUser(this.model).subscribe(res=>{
        console.log("Mi Res");
        console.log(res);
        this.spinner=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinner=false;
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
    }
  }
  cargaUser():void{
    this._user.getUser(this.model.id).subscribe(res=>{
      console.log("Mi res");
      console.log(res);
      this.model=res;
      this.imagenName='admin.png';
      this.spinner=false;
    },error=>{
      this.spinner=false;
      console.log("mi error");
      console.log(error);
    });
  }
  verifica():void{
    if(this.rutaActiva.snapshot.params.id!=null){
      console.log("no es nulo");
      this.model.id=this.rutaActiva.snapshot.params.id;
      this.isUpdate=false;
    }else{
      console.log("es nulo");
      this.isUpdate=true;
    }
  }
  setErrors():void{
    this.errors.push(new Errores('Error al guardar los Datos'));
    this.errors.push(new Errores('Error al ingresar el Nombre'));
    this.errors.push(new Errores('Error al ingresar el Apellido'));
    this.errors.push(new Errores('Error al ingresar el Carnet'));
    this.errors.push(new Errores('Error al ingresar el Telefono'));
    this.errors.push(new Errores('Correo Electronico no Valido'));
  }
}
