import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

//import * as $ from 'jquery';
import dayGridPlugin from '@fullcalendar/daygrid';
declare var jQuery:any;
declare var $:any;
@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  calendarPlugins = [dayGridPlugin];
  private fechaEvento:String;
  calendarEvents = [];

  ngOnInit() {
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
      console.log(error);
    }


  /*  if(arg.target.attributes[1].value==="undefined"){
      console.log("es nulo verdad");
    }else{
      console.log("es nulo");
      console.log(arg.target.attributes[1].value);
    }*/
  }

  


}

