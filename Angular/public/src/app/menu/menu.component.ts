import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import * as $ from 'jquery';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  calendarPlugins = [dayGridPlugin];
  private dias:String[]=['Lunes','Martes','Miercoles','Jueves','Viernes'];
  jstoday = '';
  private today:Date;
  calendarEvents = [
    { title: 'event 1', date: '2019-10-03' }
  ];

  ngOnInit() {
    this.today= new Date;
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }
  handleDateClick(arg) { 
    try {
      var fechaEvento:String=arg.target.attributes[1].value;
      //console.log(arg.target.attributes[1].value);
      if(fechaEvento.length===10){
        console.log("es una fecha");
        console.log(fechaEvento);
      }else{
        console.log("no es una fecha");
      }
    } catch (error) {
      console.log("error error!!");
    }


  /*  if(arg.target.attributes[1].value==="undefined"){
      console.log("es nulo verdad");
    }else{
      console.log("es nulo");
      console.log(arg.target.attributes[1].value);
    }*/
  }

  


}

