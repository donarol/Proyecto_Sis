import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { ListaInicioComponent } from './lista-inicio.component';
import { ListaAlumnosComponent } from '../lista-alumnos/lista-alumnos.component';
import { ListaCamarasComponent } from '../lista-camaras/lista-camaras.component';
import { ListaDocentesComponent } from '../lista-docentes/lista-docentes.component';

describe('ListaInicioComponent', () => {
  let component: ListaInicioComponent;
  let fixture: ComponentFixture<ListaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        ListaInicioComponent,
        ListaAlumnosComponent,
        ListaCamarasComponent,
        ListaDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
