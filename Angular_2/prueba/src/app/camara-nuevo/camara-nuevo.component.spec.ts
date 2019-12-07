import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraNuevoComponent } from './camara-nuevo.component';

describe('CamaraNuevoComponent', () => {
  let component: CamaraNuevoComponent;
  let fixture: ComponentFixture<CamaraNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
