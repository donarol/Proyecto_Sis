import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';
import { TurnoDatosComponent } from './turno-datos.component';
import { Turno } from '../modelos/Turno';

describe('TurnoDatosComponent', () => {
  let component: TurnoDatosComponent;
  let fixture: ComponentFixture<TurnoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ TurnoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it("should call getTurno and return list of turno", async(() => {
    var response: Turno;
    response.turno_id='2';
    response.nombre='turno 1';
    response.monto=250;
    response.gestion='2019';
    response.hora_inicio="04:00:00";
    response.hora_fin="07:00:00";
    spyOn(component, 'getTurno').and.returnValue(of(response))
  
    component.getTurno('2');
  
    fixture.detectChanges(); 
  
    expect(component.turno).toEqual(response);
  }));*/

});
