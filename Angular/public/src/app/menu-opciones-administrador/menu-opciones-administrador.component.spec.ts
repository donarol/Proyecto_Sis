import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOpcionesAdministradorComponent } from './menu-opciones-administrador.component';

describe('MenuOpcionesAdministradorComponent', () => {
  let component: MenuOpcionesAdministradorComponent;
  let fixture: ComponentFixture<MenuOpcionesAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOpcionesAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOpcionesAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
