import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdministradorComponent } from './lista-administrador.component';

describe('ListaAdministradorComponent', () => {
  let component: ListaAdministradorComponent;
  let fixture: ComponentFixture<ListaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
