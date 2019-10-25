import { Component, OnInit } from '@angular/core';
import { Plato } from '../modelos/Plato';
import { Ingrediente } from '../modelos/Ingrediente';
import { IngredienteService } from '../servicios/ingrediente.service';
import { NgForm } from '@angular/forms';
import { Errores } from '../modelos/Errores';
import { PlatoService } from '../servicios/plato.service';
import { IngredientePlatoService } from '../servicios/ingrediente-plato.service';
import { Ingrediente_Plato } from '../modelos/Ingrediente_Plato';

@Component({
  selector: 'app-menu-nuevo',
  templateUrl: './menu-nuevo.component.html',
  styleUrls: ['./menu-nuevo.component.css']
})
export class MenuNuevoComponent implements OnInit {
  private errors:Errores[];
  private ingredientes:Ingrediente[];
  private spinnerIngredientes:Boolean;
  private spinnerIngrediente:Boolean;
  private spinnerPlato:Boolean;
  private nuevoIngrediente:Ingrediente;
  private errorIngrediente:Errores;
  private plato:Plato;
  constructor(
    private _ingrediente:IngredienteService,
    private _plato:PlatoService,
    private _ingredientePlato:IngredientePlatoService
  ) { }

  ngOnInit() {
    this.errors=[];
    this.spinnerIngredientes=false;
    this.spinnerIngrediente=false;
    this.spinnerPlato=false;
    this.nuevoIngrediente=new Ingrediente;
    this.plato=new Plato;
    this.setErrors();
    this.getIngredientes();
  }
  getIngredientes():void{
    this.spinnerIngredientes=true;
    this._ingrediente.getIngredientes().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.ingredientes=res;
      this.spinnerIngredientes=false;
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerIngredientes=false;
    });
  }
  addIngrediente(form:NgForm):void{
    console.log(form);
    if(form.valid){
      console.log("es valido");
      this.spinnerIngrediente=true;
      this._ingrediente.addIngrediente(this.nuevoIngrediente).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.ingredientes.push(res);
        this.nuevoIngrediente = new Ingrediente;
        this.spinnerIngrediente=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinnerIngrediente=false;
      });
    }else{
      console.log("no es valido");
      this.errorIngrediente.getError();
    }
  }
  addPlato(form:NgForm):void{
    console.log(form);
    if(form.valid && this.isIngrediente()){
      console.log("es valido");
      this.spinnerPlato=true;
      this._plato.addPlato(this.plato).subscribe(res=>{
        console.log("mi res");
        console.log(res);
        this.ingredientes.forEach(element => {
          if(element.estado){
            this.spinnerPlato=true;
            var aux:Ingrediente_Plato=new Ingrediente_Plato;
            aux.ingrediente_id=element.ingrediente_id;
            aux.plato_id=res.plato_id;
            this._ingredientePlato.addIngredientePlato(aux).subscribe(res=>{
              console.log("mi res");
              console.log(res);
            },error=>{
              console.log("mi error");
              console.log(error);
              this.spinnerPlato=false;
            });
          }
        });
        //this.spinnerPlato=false;
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinnerPlato=false;
      });
      
    }else{  
      console.log("no es valido");
      if(form.controls.nombrePlato.status==='INVALID')
        this.errors[1].getError();
      if(form.controls.fechaPlato.status==='INVALID')
        this.errors[2].getError();
      if(form.controls.preparacionPlato.status==='INVALID')
        this.errors[3].getError();
      if(!this.isIngrediente())
        this.errors[4].getError();
    }
  }

  isIngrediente():Boolean{
    for (let index = 0; index < this.ingredientes.length; index++) {
        if(this.ingredientes[index].estado)
          return true;
    }
    return false;
  }


  setErrors():void{
    this.errorIngrediente=new Errores('Error al ingresar el ingrediente');
    this.errors.push(new Errores('Error al crear el plato'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar la fecha'));
    this.errors.push(new Errores('Error al ingresar la preparaccion'));
    this.errors.push(new Errores('Se requiere al menos un ingrediente'));
  }

}
