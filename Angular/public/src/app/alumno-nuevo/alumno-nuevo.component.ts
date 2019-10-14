import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno-nuevo',
  templateUrl: './alumno-nuevo.component.html',
  styleUrls: ['./alumno-nuevo.component.css']
})
export class AlumnoNuevoComponent implements OnInit {
  private alergias:String[]=[];
  constructor() { }

  ngOnInit() {
  }
  inscribir(){}
}
