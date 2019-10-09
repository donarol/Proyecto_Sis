import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoBorradoComponent } from './curso-borrado.component';

describe('CursoBorradoComponent', () => {
  let component: CursoBorradoComponent;
  let fixture: ComponentFixture<CursoBorradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoBorradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
