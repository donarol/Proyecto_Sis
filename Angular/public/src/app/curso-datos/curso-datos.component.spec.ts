import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDatosComponent } from './curso-datos.component';

describe('CursoDatosComponent', () => {
  let component: CursoDatosComponent;
  let fixture: ComponentFixture<CursoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
