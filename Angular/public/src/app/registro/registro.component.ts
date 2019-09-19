import { Component, OnInit } from '@angular/core';
import { Familiar } from '../modelos/Familiar';
import { FamiliarService } from '../servicios/familiar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  private familiar:Familiar;
  private contrasena2:String;
  constructor(
    private _familiar:FamiliarService
  ) { }

  ngOnInit() {
    this.familiar=new Familiar();
    this.contrasena2="";
  }
  registro(){
    console.log("---REGISTRO---");
    console.log(this.familiar);
    console.log(this.contrasena2);
    console.log("------");
    if(this.familiar.contrasena===this.contrasena2){
      this._familiar.addFamiliar(this.familiar).subscribe(res=>{
        console.log(res);
      });
    }else{
      console.log("las contrasenas no son identicas");
    }
  }

}
