import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { from, Subject } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {
 // private pruebas:string[5];
  private curso_id:number;
  private sub: any;
  private componentes:string[]=['Alumnos','Docentes','Camaras'];
  private valor_menu:number;
  //AGREGAR LA LISTA DE LOS CURSOS
  private listas:Array<any>=[
    {nombre:'Curso 1',id:'1'},
    {nombre:'Curso 2',id:'2'},
    {nombre:'Curso 3',id:'3'},
    {nombre:'Curso 4',id:'4'},
    {nombre:'Curso 5',id:'5'},
    {nombre:'Curso 6',id:'6'},
    {nombre:'Curso 7',id:'7'},
    {nombre:'Curso 8',id:'8'},
    {nombre:'Curso 9',id:'9'},
    {nombre:'Curso 10',id:'10'},
    {nombre:'Curso 11',id:'11'}
  ];
  constructor(
    private rutaActiva:ActivatedRoute
  ){
    this.valor_menu=0;
  }

  ngOnInit() {
    this.sub = this.rutaActiva.params.subscribe(params => {
      this.curso_id = +params['id'];
      console.log("se carga el usuario con id:"+ this.curso_id);
      this.cursos(this.listas[0]);
     // var a=`as${this.valor_menu}`;
   });
   
  }
 /* onChange(deviceValue){
    console.log("el curso a mostrar es: "+deviceValue.target.value);
   // this.valor_menu=0;(change)='onChange($event)'
  }*/


  cursos(curso:any){
    console.log(curso);
    this.curso_id=curso.id;
    console.log(this.valor_menu+" mi valor");
    this.valor_menu=-1;
  }
  muestra(componente){
        this.valor_menu=componente;
        console.log(this.valor_menu);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

