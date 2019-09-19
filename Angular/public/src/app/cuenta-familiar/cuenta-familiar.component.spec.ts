import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaFamiliarComponent } from './cuenta-familiar.component';

describe('CuentaFamiliarComponent', () => {
  let component: CuentaFamiliarComponent;
  let fixture: ComponentFixture<CuentaFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
