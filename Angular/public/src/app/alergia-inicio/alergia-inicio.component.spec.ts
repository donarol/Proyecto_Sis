import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaInicioComponent } from './alergia-inicio.component';

describe('AlergiaInicioComponent', () => {
  let component: AlergiaInicioComponent;
  let fixture: ComponentFixture<AlergiaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
