import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/Alumno';
import { AlumnoService } from '../servicios/alumno.service';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css']
})
export class AlumnoNuevoComponent implements OnInit {
  private alergias:String[]=[];
  private alumno:Alumno;
  constructor(
    private _alumno:AlumnoService
  ) {}

  ngOnInit() {
  }
  inscribir(){

  }
}
