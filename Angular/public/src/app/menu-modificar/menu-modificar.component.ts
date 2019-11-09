import { Component, OnInit } from '@angular/core';
import { Plato } from '../modelos/Plato';
import { PlatoService } from '../servicios/plato.service';
import { Errores } from '../modelos/Errores';

@Component({
  selector: 'app-menu-modificar',
  templateUrl: './menu-modificar.component.html',
  styleUrls: ['./menu-modificar.component.css']
})
export class MenuModificarComponent implements OnInit {
  private platos:Plato[];
  private spinnerPlato:Boolean;
  private errors:Errores[];
  constructor(
    private _plato:PlatoService
  ) { }

  ngOnInit() {
    this.spinnerPlato=false;
    this.platos=[];
    this.errors=[];
    this.getPlato();
  }
  getPlato():void{
    this.spinnerPlato=true;
    this._plato.getPlatos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.platos=res;
      this.spinnerPlato=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerPlato=false;
    });
  }
  getErrors():void{
    
  }

}
