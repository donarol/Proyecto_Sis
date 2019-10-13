import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoBorrarComponent } from './curso-borrar.component';

describe('CursoBorrarComponent', () => {
  let component: CursoBorrarComponent;
  let fixture: ComponentFixture<CursoBorrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoBorrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
