import { Component, OnInit } from '@angular/core';
import { FamiliarService } from '../servicios/familiar.service';
import { Familiar } from '../modelos/Familiar';
import { ActivatedRoute, Params, Router } from '@angular/router';

//REVISAR CLASE
@Component({
  selector: 'app-cuenta-familiar',
  templateUrl: './cuenta-familiar.component.html',
  styleUrls: ['./cuenta-familiar.component.css']
})
export class CuentaFamiliarComponent implements OnInit {
  private model:Familiar;
  private imagenName:string;
  private href: string = "";
  private id:string="";
  constructor(
    private _familiarService:FamiliarService,
    private router: Router
  ) {}

  ngOnInit() {
    /*this.model=new Familiar;
    this.href = this.router.url;
    console.log(this.router.url);
    this.id=this.split();
    console.log(this.id);

    this._familiarService.getFamiliar(this.id).subscribe(res=>{
      console.log("res");
      console.log(res);
      this.model=res;
      console.log("model");
      console.log(this.model);
      this.imagenName='tutor.png';
    });*/
  }
  /*guardar(){
    console.log("guardar");
    this._familiarService.updateFamiliar(this.id,this.model).subscribe(res=>{
      console.log("res");
      console.log(res);
      alert("Datos Actualizados Exitosamente");
    })
  }
  split(){
    let s:string[]=this.href.split('/');
    return s[2];
  }*/
}
