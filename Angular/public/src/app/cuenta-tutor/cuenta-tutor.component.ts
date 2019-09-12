import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { from } from 'rxjs';
import { Familiar } from '../modelos/Familiar';
@Component({
  selector: 'app-cuenta-tutor',
  templateUrl: './cuenta-tutor.component.html',
  styleUrls: ['./cuenta-tutor.component.css']
})
export class CuentaTutorComponent implements OnInit {
  private id:string;
  private familiar:Familiar;
  constructor(
    private rutaActiva:ActivatedRoute
  ){
    this.id=this.rutaActiva.snapshot.params.id;
    console.log("el id es "+this.id);
  }

  ngOnInit() {
    this.familiar=new Familiar();
    this.familiar.nombre="nombre 1";
    this.familiar.apellido="apellido 1";
    this.familiar.carnet="carnet 1";
    this.familiar.correo="correo 1";
    this.familiar.telefono="telefono 1";
  }

}
