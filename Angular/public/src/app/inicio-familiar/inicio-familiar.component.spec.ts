import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFamiliarComponent } from './inicio-familiar.component';

describe('InicioFamiliarComponent', () => {
  let component: InicioFamiliarComponent;
  let fixture: ComponentFixture<InicioFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
