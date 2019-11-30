import { Component, OnInit } from '@angular/core';
import { User } from '../modelos/User';
import { AlumnoService } from '../servicios/alumno.service';
import { Alumno } from '../modelos/Alumno';
import { ActivatedRoute } from '@angular/router';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-alumno-datos-familiar',
  templateUrl: './alumno-datos-familiar.component.html',
  styleUrls: ['./alumno-datos-familiar.component.css']
})
export class AlumnoDatosFamiliarComponent implements OnInit {
  /*nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];<tree-root [nodes]="nodes" [options]="options"></tree-root>
  options = {};*/
  private familiares:User[];
  constructor(
    private _familiar:AlumnoService,
    private rutaActiva:ActivatedRoute
  ) { }

  ngOnInit() {
    this.familiares=[];
    this.getFamiliares(this.rutaActiva.snapshot.params.id);
  }
  getFamiliares(id:string):void{
    var alumno:Alumno=new Alumno;
    alumno.alumno_id=id;
    this._familiar.getFamiliares(alumno).subscribe(res=>{
      console.log("mi res");
      console.log(res);
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }

}
