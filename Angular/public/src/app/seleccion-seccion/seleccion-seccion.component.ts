import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import { SeccionService } from '../servicios/seccion.service';
import { Seccion } from '../modelos/Seccion';

@Component({
  selector: 'app-seleccion-seccion',
  templateUrl: './seleccion-seccion.component.html',
  styleUrls: ['./seleccion-seccion.component.css']
})
export class SeleccionSeccionComponent implements OnInit {
  @Input('idSeguro') private idSeguro;
  private secciones:Seccion[];
  private model:Seccion;
  private aux:string;
  @Output() selecSeccion = new EventEmitter<Seccion>();
  constructor(
    private _seccion:SeccionService
  ) { }

  ngOnInit() {
    this.getSecciones();
    this.model=new Seccion;
  }
  getSecciones():void{
    this._seccion.getSecciones().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.secciones=res;
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }
  getSeccion(id:String):Seccion{
    console.log("se recibe: "+id);
    for (let index = 0; index < this.secciones.length; index++) {
      console.log("se ve: "+this.secciones[index].seccion_id);
      if(this.secciones[index].seccion_id==id){
        console.log("se encontro "+this.secciones[index].seccion_id);
        return this.secciones[index];
      }
    }
    return null;
  }
  
  selectSeccion(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarSeccion(){
   /* this.model=this.aux;
    this.selecSeccion.emit(this.model);*/
    if(this.getSeccion(this.aux)!=null){
      console.log("se enviara");
      this.model=this.getSeccion(this.aux);
      this.selecSeccion.emit(this.model);
    }else{  
      console.log("es nulo no se enviara nada");
    }
  }
}
