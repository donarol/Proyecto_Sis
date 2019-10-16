import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AdministradorService } from '../servicios/administrador.service';
import { User } from '../modelos/User';

@Component({
  selector: 'app-seleccion-docente',
  templateUrl: './seleccion-docente.component.html',
  styleUrls: ['./seleccion-docente.component.css']
})
export class SeleccionDocenteComponent implements OnInit {
  @Input('idSeguro') private idSeguro;
  private administradores:User[];
  private imagenName:string;
  private model:User;
  private aux:string;
  @Output() selecDocente = new EventEmitter<User>();
  constructor(
    private _administrador:AdministradorService
  ) { }

  ngOnInit() {
    this.getAdministradores();
    this.model = new User;
    this.imagenName = 'admin.png';
  }

  selectDocente(deviceValue){
    console.log("se cambio");
    this.aux=deviceValue.target.value;
    console.log(this.aux);
  }
  enviarDocente(){
    //this.model=this.aux;
    if(this.getAdministrador(this.aux)!=null){
      console.log("se enviara ");
      this.model = this.getAdministrador(this.aux);
      this.selecDocente.emit(this.model);
    }else{
      console.log("el valor es nulo no se enviara nada");
    }
   // this.selecDocente.emit(this.model);
  }
  getAdministrador(id:String):User{
    console.log("se recibe: "+id);
    for (let index = 0; index < this.administradores.length; index++) {
      console.log("se ve "+this.administradores[index].id);
      if(this.administradores[index].id==id){
        console.log("entro en "+this.administradores[index].id);
        return this.administradores[index];
      }
      
    }
    return null;
  }
  getAdministradores():void{
    this._administrador.getAdministradores().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      
      this.administradores=res;
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }

}
