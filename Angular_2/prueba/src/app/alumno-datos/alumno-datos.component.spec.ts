import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosComponent } from './alumno-datos.component';

describe('AlumnoDatosComponent', () => {
  let component: AlumnoDatosComponent;
  let fixture: ComponentFixture<AlumnoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
