import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  
  private dias:String[]=['Lunes','Martes','Miercoles','Jueves','Viernes'];
  jstoday = '';
  private today:Date;
  ngOnInit() {
    this.today= new Date;
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }



}

