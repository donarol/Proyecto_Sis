import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCursoComponent } from './seleccion-curso.component';
import { Curso } from '../modelos/Curso';

describe('SeleccionCursoComponent', () => {
  let component: SeleccionCursoComponent;
  let fixture: ComponentFixture<SeleccionCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
