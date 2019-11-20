import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PlatoService } from '../servicios/plato.service';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  private calendarPlugins = [dayGridPlugin];
  private fechaEvento:String;
  private calendarEvents = [];
  constructor(
    private _plato:PlatoService
  ){

  }
  ngOnInit() {
    this.getPlatos();
  }
  getPlatos():void{
    this._plato.getPlatos().subscribe(res=>{
      console.log("mi res");
      console.log(res);
      
     /* res.forEach(element => {
        this.calendarEvents.push({
          id:element.plato_id,
          title:element.nombre,
          start:element.fecha
        });
      });*/
      this.calendarEvents.push({
        id: 'a',
        title: 'my event',
        start: '2019-11-07'
      });
    },error=>{
      console.log("mi error");
      console.log(error);
    });
  }
  handleDateClick(arg) { 
    try {
      console.log(arg);
      this.fechaEvento=arg.target.attributes[1].value;
      //console.log(arg.target.attributes[1].value);
      if(this.fechaEvento.length===10){
        console.log("es una fecha");
        console.log(this.fechaEvento);
        $('#targetMenuEvento').modal('show');
      }else{
        console.log("no es una fecha");
      }
    } catch (error) {
      console.log("error error!!");
      //console.log(error);
    }


  /*  if(arg.target.attributes[1].value==="undefined"){
      console.log("es nulo verdad");
    }else{
      console.log("es nulo");
      console.log(arg.target.attributes[1].value);
    }*/
  }

  


}

