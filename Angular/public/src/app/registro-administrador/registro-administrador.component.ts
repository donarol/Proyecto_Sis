import { Component, OnInit } from '@angular/core';
import { Administrador } from '../modelos/Administrador';

@Component({
  selector: 'app-registro-administrador',
  templateUrl: './registro-administrador.component.html',
  styleUrls: ['./registro-administrador.component.css']
})
export class RegistroAdministradorComponent implements OnInit {
  private administrador:Administrador;
  constructor() { }

  ngOnInit() {
    this.administrador=new Administrador();
  }

}
