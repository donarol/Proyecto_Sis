import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionTurnoComponent } from './seleccion-turno.component';

describe('SeleccionTurnoComponent', () => {
  let component: SeleccionTurnoComponent;
  let fixture: ComponentFixture<SeleccionTurnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionTurnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
