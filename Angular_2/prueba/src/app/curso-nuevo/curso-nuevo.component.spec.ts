import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { CursoNuevoComponent } from './curso-nuevo.component';
import { SeleccionTurnoComponent } from '../seleccion-turno/seleccion-turno.component';
import { SeleccionSeccionComponent } from '../seleccion-seccion/seleccion-seccion.component';
import { SeleccionDocenteComponent } from '../seleccion-docente/seleccion-docente.component';

describe('CursoNuevoComponent', () => {
  let component: CursoNuevoComponent;
  let fixture: ComponentFixture<CursoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        CursoNuevoComponent,
        SeleccionTurnoComponent,
        SeleccionSeccionComponent,
        SeleccionDocenteComponent ],
      providers:[CursoNuevoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
