import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraModificarComponent } from './camara-modificar.component';

describe('CamaraModificarComponent', () => {
  let component: CamaraModificarComponent;
  let fixture: ComponentFixture<CamaraModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
