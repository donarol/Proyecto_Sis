import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionesAdministradorComponent } from './configuraciones-administrador.component';

describe('ConfiguracionesAdministradorComponent', () => {
  let component: ConfiguracionesAdministradorComponent;
  let fixture: ComponentFixture<ConfiguracionesAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionesAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
