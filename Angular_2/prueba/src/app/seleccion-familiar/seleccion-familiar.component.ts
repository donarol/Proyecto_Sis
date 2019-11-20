import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../modelos/User';
import { FamiliarService } from '../servicios/familiar.service';
import { Familiar } from '../modelos/Familiar';

@Component({
  selector: 'app-seleccion-familiar',
  templateUrl: './seleccion-familiar.component.html',
  styleUrls: ['./seleccion-familiar.component.css']
})
export class SeleccionFamiliarComponent implements OnInit {
  private familiares:User[];
  private model:User;
  private spinnerFamiliar:Boolean;
  private parentesco:String;
  private enviar:any;
  @Output() _familiar_ = new EventEmitter<any>();
  constructor(
    private _familiar:FamiliarService
  ) {}

  ngOnInit() {
    this.model=undefined;
    this.spinnerFamiliar=false;
    this.getFamiliares();
    this.parentesco='';
  }
  getFamiliares():void{
    this.spinnerFamiliar=true;
    this._familiar.getFamiliares().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.familiares=res;
      this.spinnerFamiliar=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerFamiliar=false;
    });
  }
  selectFamiliar(deviceValue){
    console.log("se cambio");
    var aux=(deviceValue.target.value);
    if(this.selectFamiliar2(aux)===undefined){
      console.log("es undefined");
    }else{
      console.log("se enviara");
      this.model=this.selectFamiliar2(aux);
      console.log(this.model);
    }
  }
  selectFamiliar2(id):User{
    for (let index = 0; index < this.familiares.length; index++) {
      if(this.familiares[index].id==id){
        return this.familiares[index];
      }
      
    }
    return undefined;
  }
  selectParentesco(parentesco:String){
    console.log("me llego");
    console.log(parentesco);
    this.parentesco=parentesco;
  }
  enviarFamiliar(){
   /* console.log("se enviara");
    console.log(this.model);
    console.log("con parentesco");
    console.log(this.parentesco);*/
    this.enviar=this.model;
    this.enviar.parentesco=this.parentesco;
    if(this.enviar.parentesco.length==0){
      alert("No se puede guardar el familair sin relacion");
    }else{
      console.log("se enviara ");
      console.log(this.enviar);
      this._familiar_.emit(this.enviar);
    }
  }
}
