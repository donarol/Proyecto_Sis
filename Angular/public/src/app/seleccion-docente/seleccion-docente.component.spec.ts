import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionDocenteComponent } from './seleccion-docente.component';

describe('SeleccionDocenteComponent', () => {
  let component: SeleccionDocenteComponent;
  let fixture: ComponentFixture<SeleccionDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
