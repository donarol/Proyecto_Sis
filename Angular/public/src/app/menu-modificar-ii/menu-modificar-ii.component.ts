import { Component, OnInit, Input } from '@angular/core';
import { Plato } from '../modelos/Plato';
import { PlatoService } from '../servicios/plato.service';
import { Errores } from '../modelos/Errores';
import { Ingrediente } from '../modelos/Ingrediente';
import { IngredienteService } from '../servicios/ingrediente.service';
import { IngredientePlatoService } from '../servicios/ingrediente-plato.service';

@Component({
  selector: 'app-menu-modificar-ii',
  templateUrl: './menu-modificar-ii.component.html',
  styleUrls: ['./menu-modificar-ii.component.css']
})
export class MenuModificarIiComponent implements OnInit {

  @Input('PlatoEnvio') set _plato_(valor:Plato){
    if(valor===undefined || valor ==null){
      console.log("es nulo");
    }else{
      console.log("me llego");
      console.log(valor);
      this.plato=valor;
      
    this.getIngredientesPlato();
    }
  }
  private spinnerPlato:Boolean;
  private spinnerIngredientes:Boolean;
  private ingredientes:Ingrediente[];
  private errors:Errores[];  
  private plato:Plato;
  private nuevoIngrediente:Ingrediente;
  constructor(
    private _plato:PlatoService,
    private _ingrediente:IngredienteService
  ) { }

  ngOnInit() {
    this.spinnerPlato=false;
    this.spinnerIngredientes=false;
    this.ingredientes=[];
    this.errors=[];
    this.nuevoIngrediente=new Ingrediente;
    this.setErrors();
    //this.getPlato();
  }
/*
  getPlato():void{
    this.spinnerPlato=true;
    this._plato.getPlato(this.plato.plato_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.spinnerPlato=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[0].getError();
    });
  }*/
  getIngredientesPlato():void{
    this.spinnerIngredientes=true;
    this._plato.getPlatoIngredientes(this.plato.plato_id).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this._ingrediente.getIngredientes().subscribe(res_2=>{
        console.log("mi res");
        console.log(res_2);
        this.ingredientes=res_2;
        res.forEach(element => {
          for (let index = 0; index < this.ingredientes.length; index++) {
            if(element.ingrediente_id==this.ingredientes[index].ingrediente_id){
              this.ingredientes[index].estado=true;
              break;
            }
          }
        });
        this.spinnerIngredientes=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.errors[10].getError();
        this.spinnerIngredientes=false;
      });
      this.spinnerIngredientes=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.errors[10].getError();
      this.spinnerIngredientes=false;
    });
  }
  setErrors():void{
    this.errors.push(new Errores('Error al cargar el Plato'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar la fecha'));
    this.errors.push(new Errores('Error al ingresar la preparaccion'));
    this.errors.push(new Errores('Se requiere al menos un ingrediente'));
    this.errors.push(new Errores('Error al crear el Ingrediente'));//5

    this.errors.push(new Errores('El Ingrediente fue creado exitosamente'));
    this.errors.push(new Errores('El Plato fue modificado Exitasamente'));//7
    
    this.errors.push(new Errores('El Ingrediente fue modificado Exitosamente'));
    this.errors.push(new Errores('Error al modificar el ingrediente'));//9

    this.errors.push(new Errores('Error al carga los ingredientes'));//10
    this.errors.push(new Errores('Error al Modificar el Plato'));//11


  }

}
