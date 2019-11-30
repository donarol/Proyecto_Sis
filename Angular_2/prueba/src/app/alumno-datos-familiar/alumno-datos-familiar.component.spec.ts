import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoDatosFamiliarComponent } from './alumno-datos-familiar.component';

describe('AlumnoDatosFamiliarComponent', () => {
  let component: AlumnoDatosFamiliarComponent;
  let fixture: ComponentFixture<AlumnoDatosFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoDatosFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDatosFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
