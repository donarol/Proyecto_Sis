import { async,inject,ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNuevoComponent } from './alumno-nuevo.component';

import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { PantallaCargaComponent } from '../pantalla-carga/pantalla-carga.component';
import { SeleccionCursoComponent } from '../seleccion-curso/seleccion-curso.component';
import { SeleccionFamiliarComponent } from '../seleccion-familiar/seleccion-familiar.component';
import { SeleccionCursoIiComponent } from '../seleccion-curso-ii/seleccion-curso-ii.component';
import { SeleccionFamiliarIiComponent } from '../seleccion-familiar-ii/seleccion-familiar-ii.component';
describe('AlumnoNuevoComponent', () => {
  let component: AlumnoNuevoComponent;
  let fixture: ComponentFixture<AlumnoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        AlumnoNuevoComponent,
        PantallaCargaComponent,
        SeleccionCursoComponent,
        SeleccionCursoIiComponent,
        SeleccionFamiliarComponent,
        SeleccionFamiliarIiComponent],
      providers:[AlumnoNuevoComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be AlumnoNuevoComponent_`, async(inject([HttpTestingController, AlumnoNuevoComponent],
    (httpClient: HttpTestingController, alumnoNuevoComponent: AlumnoNuevoComponent) => {
      expect(alumnoNuevoComponent).toBeTruthy();
  })));
});
