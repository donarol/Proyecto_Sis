import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { AlumnoDatosPersonalComponent } from './alumno-datos-personal.component';
import { AlumnoDatosFamiliarComponent } from '../alumno-datos-familiar/alumno-datos-familiar.component';

describe('AlumnoDatosPersonalComponent', () => {
  let component: AlumnoDatosPersonalComponent;
  let fixture: ComponentFixture<AlumnoDatosPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        AlumnoDatosPersonalComponent,
        AlumnoDatosFamiliarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
