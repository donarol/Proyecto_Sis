import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionCursoIiComponent } from './seleccion-curso-ii.component';
import { Curso } from '../modelos/Curso';

describe('SeleccionCursoIiComponent', () => {
  let component: SeleccionCursoIiComponent;
  let fixture: ComponentFixture<SeleccionCursoIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionCursoIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionCursoIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
