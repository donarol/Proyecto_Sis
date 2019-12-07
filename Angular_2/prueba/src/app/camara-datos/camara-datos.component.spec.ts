import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraDatosComponent } from './camara-datos.component';

describe('CamaraDatosComponent', () => {
  let component: CamaraDatosComponent;
  let fixture: ComponentFixture<CamaraDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
