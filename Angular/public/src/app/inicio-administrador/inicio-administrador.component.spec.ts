import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { InicioAdministradorComponent } from './inicio-administrador.component';
import { MenuOpcionesAdministradorComponent } from '../menu-opciones-administrador/menu-opciones-administrador.component';

describe('InicioAdministradorComponent', () => {
  let component: InicioAdministradorComponent;
  let fixture: ComponentFixture<InicioAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        InicioAdministradorComponent,
        MenuOpcionesAdministradorComponent],
      providers:[InicioAdministradorComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
