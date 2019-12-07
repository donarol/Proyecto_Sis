import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraModificarIiComponent } from './camara-modificar-ii.component';

describe('CamaraModificarIiComponent', () => {
  let component: CamaraModificarIiComponent;
  let fixture: ComponentFixture<CamaraModificarIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraModificarIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraModificarIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
