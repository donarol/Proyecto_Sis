import { Component, OnInit } from '@angular/core';
import { Familiar } from '../modelos/Familiar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private familiar:Familiar;
  constructor() { }

  ngOnInit() {
    this.familiar=new Familiar();
  }
  registro(){
    console.log("---REGISTRO---");
    console.log(this.familiar.nombre);
    console.log(this.familiar.apellido);
    console.log(this.familiar.carnet);
    console.log(this.familiar.telefono);
    console.log(this.familiar.correo);
    console.log(this.familiar.contrasena);
    console.log("------")
  }

}
