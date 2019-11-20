import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

import { CursoService } from '../servicios/curso.service';
import { Curso } from '../modelos/Curso';
import { from } from 'rxjs';
@Component({
  selector: 'app-lista-inicio',
  templateUrl: './lista-inicio.component.html',
  styleUrls: ['./lista-inicio.component.css']
})
export class ListaInicioComponent implements OnInit {
  private curso:Curso;
  constructor(
    private rutaActiva:ActivatedRoute,
    private router: Router
  ) {
    console.log("contructor");
    //console.log(router.routerState.snapshot);
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        console.log(event.url);
        console.log(rutaActiva.snapshot.params.id);
        this.cargaCursos();
      }
      // NavigationStart
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
   }

  ngOnInit(){}
  cargaCursos(){
    this.curso=new Curso;
    console.log("ruta");
    console.log(this.rutaActiva.snapshot.params.id);
    
    if(this.rutaActiva.snapshot.params.id!==undefined){
      console.log("no es nulo");
      this.curso.curso_id=this.rutaActiva.snapshot.params.id;
      /*this._curso.getAlumnos(this.curso).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.ver=true;
      },error=>{
        console.log("mi error");
        console.log(error);
      });*/
    }
  }

}
