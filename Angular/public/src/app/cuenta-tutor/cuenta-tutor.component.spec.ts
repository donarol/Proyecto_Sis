import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaTutorComponent } from './cuenta-tutor.component';

describe('CuentaTutorComponent', () => {
  let component: CuentaTutorComponent;
  let fixture: ComponentFixture<CuentaTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
