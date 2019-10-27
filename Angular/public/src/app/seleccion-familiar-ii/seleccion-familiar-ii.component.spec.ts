import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionFamiliarIiComponent } from './seleccion-familiar-ii.component';

describe('SeleccionFamiliarIiComponent', () => {
  let component: SeleccionFamiliarIiComponent;
  let fixture: ComponentFixture<SeleccionFamiliarIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionFamiliarIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionFamiliarIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
