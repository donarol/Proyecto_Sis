import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private estado:boolean;
  constructor() { }

  ngOnInit() {
    this.estado=false;
  }
  cambio(estado:boolean){
    this.estado=estado;
  }
}
