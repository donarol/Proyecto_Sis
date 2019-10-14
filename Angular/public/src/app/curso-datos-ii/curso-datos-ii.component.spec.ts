import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDatosIIComponent } from './curso-datos-ii.component';

describe('CursoDatosIIComponent', () => {
  let component: CursoDatosIIComponent;
  let fixture: ComponentFixture<CursoDatosIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoDatosIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDatosIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
