import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { CursoDatosComponent } from './curso-datos.component';
import { CursoDatosIIComponent } from '../curso-datos-ii/curso-datos-ii.component';
import { SeleccionDocenteComponent } from '../seleccion-docente/seleccion-docente.component';
import { SeleccionSeccionComponent } from '../seleccion-seccion/seleccion-seccion.component';
import { SeleccionTurnoComponent } from '../seleccion-turno/seleccion-turno.component';

import { of } from 'rxjs';
import { CursoService } from '../servicios/curso.service';
import { Curso } from '../modelos/Curso';

describe('CursoDatosComponent', () => {
  let component: CursoDatosComponent;
  let fixture: ComponentFixture<CursoDatosComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        CursoDatosComponent,
        CursoDatosIIComponent,
        SeleccionDocenteComponent,
        SeleccionSeccionComponent,
        SeleccionTurnoComponent],
      providers:[CursoDatosComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*beforeEach(inject([CursoService], s => {
    CursoService = s;
    element = fixture.nativeElement;
  }));*/
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be CursoDatosComponent_`, async(inject([HttpTestingController, CursoDatosComponent],
    (httpClient: HttpTestingController, cursoDatosComponent: CursoDatosComponent) => {
      expect(cursoDatosComponent).toBeTruthy();
  })));

 /* it("should call getCursos and return list of cursos", async(() => {
    const response: Curso[] = [];
  
    spyOn(component, 'getCursos').and.returnValue(of(response))
  
    component.getCursos();
  
    fixture.detectChanges(); 
  
    expect(component.cursos).toEqual(response);
  }));*/

});
