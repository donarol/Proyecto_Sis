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
  private model:Ingrediente;
  private spinnerIngredientes:Boolean;
  private spinnerIngrediente:Boolean;
  private spinnerPlato:Boolean;
  private spinnerIngredienteModificar:Boolean;
  private nuevoIngrediente:Ingrediente;
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
    this.spinnerIngredienteModificar=false;
    this.nuevoIngrediente=new Ingrediente;
    this.model=new Ingrediente;
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
      this.errors[10].getError();
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
        this.errors[6].getError();
      },error=>{
        console.log("mi error");
        console.log(error);
        this.spinnerIngrediente=false;
        this.errors[5].getError();
      });
    }else{
      console.log("no es valido");
      this.errors[5].getError();
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
              this.spinnerPlato=false;
            },error=>{
              console.log("mi error");
              console.log(error);
              this.spinnerPlato=false;
            });
          }
        });
        this.errors[7].getError();
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
  modificarIngrediente(ingrediente:Ingrediente,index):void{
    this.model=new Ingrediente;
    this.model.ingrediente_id=index;
    this.model.nombre=ingrediente.nombre;
    this.model.estado=ingrediente.estado;
  }
  updateIngrediente(){
    this.spinnerIngredienteModificar=true;
    var n:number=Number(this.model.ingrediente_id);
    this.ingredientes[n].nombre=this.model.nombre;
    this._ingrediente.updateIngrediente(this.ingredientes[n]).subscribe(res=>{
      console.log("mi res");
      console.log(res);
      this.spinnerIngredienteModificar=false;
      this.errors[8].getError();
    },error=>{
      console.log("mi error");
      console.log(error);
      this.spinnerIngredienteModificar=false;
      this.errors[9].getError();
    });
  }

  isIngrediente():Boolean{
    for (let index = 0; index < this.ingredientes.length; index++) {
        if(this.ingredientes[index].estado)
          return true;
    }
    return false;
  }


  setErrors():void{
    this.errors.push(new Errores('Error al crear el Plato'));
    this.errors.push(new Errores('Error al ingresar el nombre'));
    this.errors.push(new Errores('Error al ingresar la fecha'));
    this.errors.push(new Errores('Error al ingresar la preparaccion'));
    this.errors.push(new Errores('Se requiere al menos un ingrediente'));
    this.errors.push(new Errores('Error al crear el Ingrediente'));//5

    this.errors.push(new Errores('El Ingrediente fue creado exitosamente'));
    this.errors.push(new Errores('El Plato fue ingresado exitosamente'));//7
    
    this.errors.push(new Errores('El Ingrediente fue modificado Exitosamente'));
    this.errors.push(new Errores('Error al modificar el ingrediente'));//9

    this.errors.push(new Errores('Error al carga los ingredientes'));//10
  }

}
