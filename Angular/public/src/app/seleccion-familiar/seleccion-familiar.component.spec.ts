import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionFamiliarComponent } from './seleccion-familiar.component';

describe('SeleccionFamiliarComponent', () => {
  let component: SeleccionFamiliarComponent;
  let fixture: ComponentFixture<SeleccionFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
