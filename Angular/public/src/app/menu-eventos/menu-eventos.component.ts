import { Component, OnInit, Input } from '@angular/core';
import { Plato } from '../modelos/Plato';
import { PlatoService } from '../servicios/plato.service';
import { Ingrediente } from '../modelos/Ingrediente';

@Component({
  selector: 'app-menu-eventos',
  templateUrl: './menu-eventos.component.html',
  styleUrls: ['./menu-eventos.component.css']
})
export class MenuEventosComponent implements OnInit {
  private platos:Plato[]=[];
  private ingredientes:Ingrediente[]=[];
  //@Input('fecha') private fechaEvento:String;
  private fechaEvento:String;
  private spinner:Boolean;
  private spinnerIngrediente:Boolean;
  private vacio:Boolean;
  private cambio:Boolean;
  @Input('fecha') set _fechaEvento(valor:String){

    if(valor===undefined){
      console.log("es nulo")
    }else{
      this.vacio=false;
      this.cambio=false;
      console.log("no es nulo")
      this.platos.splice(0);
      this.getPlatos(valor);
    }

  };
  get _fechaEvento(){return this.fechaEvento;}
  constructor(
    private _plato:PlatoService
  ) {}

  ngOnInit() {
    this.spinner=false;
    this.spinnerIngrediente=false;
    this.vacio=false;
    this.cambio=false;
  }
  selectPlato(deviceValue){
    console.log("se cambio");
    console.log(deviceValue.target.value);
    this.ingredientes.splice(0);
    this.getIngredientes(deviceValue.target.value);
    
  }
  getPlatos(fecha:String):void{
    this.spinner=true;
    this._plato.getPlatoFecha(fecha).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.platos=res;
      this.spinner=false;
      if(this.platos.length===0) 
        this.vacio=true;
      else
        this.cambio=true;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinner=false;
    });
  }
  getIngredientes(id:String){
    this.spinnerIngrediente=true;
    this._plato.getPlatoIngredientes(id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.ingredientes=res;
      this.spinnerIngrediente=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerIngrediente=false;
    });
  }


}
