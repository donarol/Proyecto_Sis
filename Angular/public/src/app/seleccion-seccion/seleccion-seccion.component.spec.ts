import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionSeccionComponent } from './seleccion-seccion.component';

describe('SeleccionSeccionComponent', () => {
  let component: SeleccionSeccionComponent;
  let fixture: ComponentFixture<SeleccionSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
