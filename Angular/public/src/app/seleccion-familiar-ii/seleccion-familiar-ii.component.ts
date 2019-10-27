import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../modelos/User';
import { Familiar } from '../modelos/Familiar';

@Component({
  selector: 'app-seleccion-familiar-ii',
  templateUrl: './seleccion-familiar-ii.component.html',
  styleUrls: ['./seleccion-familiar-ii.component.css']
})
export class SeleccionFamiliarIiComponent implements OnInit {
  @Input('familiar') set _familiar_(valor:User){
    if(valor===undefined){
      this.ver=false;
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.user=valor;
      this.parentesco='';
      this.ver=true;
    }

  };
  @Output() _parentesco_ = new EventEmitter<String>();
  private ver:Boolean;
  private user:User;
  private imagenName:string;
  private parentesco:String;
  constructor() { }

  ngOnInit() {
    this.ver=false;
    this.user=new User;
    this.imagenName='admin.png';
  }
  selectParentesco(){
    this._parentesco_.emit(this.parentesco);
  }

}
