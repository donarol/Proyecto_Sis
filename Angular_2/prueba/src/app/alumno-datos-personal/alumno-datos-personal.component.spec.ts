import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosPersonalComponent } from './alumno-datos-personal.component';

describe('AlumnoDatosPersonalComponent', () => {
  let component: AlumnoDatosPersonalComponent;
  let fixture: ComponentFixture<AlumnoDatosPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoDatosPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
