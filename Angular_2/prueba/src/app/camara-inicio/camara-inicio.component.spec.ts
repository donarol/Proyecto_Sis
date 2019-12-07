import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraInicioComponent } from './camara-inicio.component';

describe('CamaraInicioComponent', () => {
  let component: CamaraInicioComponent;
  let fixture: ComponentFixture<CamaraInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
