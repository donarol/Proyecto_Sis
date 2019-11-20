import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { CursoDatosIIComponent } from './curso-datos-ii.component';
import { SeleccionDocenteComponent } from '../seleccion-docente/seleccion-docente.component';
import { SeleccionSeccionComponent } from '../seleccion-seccion/seleccion-seccion.component';
import { SeleccionTurnoComponent } from '../seleccion-turno/seleccion-turno.component';

describe('CursoDatosIIComponent', () => {
  let component: CursoDatosIIComponent;
  let fixture: ComponentFixture<CursoDatosIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        CursoDatosIIComponent,
        SeleccionDocenteComponent,
        SeleccionSeccionComponent,
        SeleccionTurnoComponent],
      providers:[CursoDatosIIComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDatosIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be CursoDatosIIComponent_`, async(inject([HttpTestingController, CursoDatosIIComponent],
    (httpClient: HttpTestingController, cursoDatosIIComponent: CursoDatosIIComponent) => {
      expect(cursoDatosIIComponent).toBeTruthy();
  })));
});
