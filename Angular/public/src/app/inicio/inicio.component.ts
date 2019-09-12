import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private estado:boolean;
  private variable:boolean;
  private vista:string;
  private imagenName:string;
  constructor() { }

  ngOnInit() {
    this.estado=false;
    this.variable=true;
    this.vista='Administrador';
    this.imagenName='admin.png'

  }
  cambio(estado:boolean){
    this.estado=estado;
    console.log("el es "+this.variable)
  }
  cambiarForm(){
    console.log(this.variable);
  }
  onChangeVariable(){
    console.log("se cambio: "+this.variable)
    if(this.variable){
      this.vista='Administrador';
      this.imagenName='admin.png';
    }  else {
      this.vista='Tutor';
      this.imagenName='tutor.png';
    }
  }
}
