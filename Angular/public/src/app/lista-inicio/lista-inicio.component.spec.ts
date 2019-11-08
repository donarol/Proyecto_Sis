import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInicioComponent } from './lista-inicio.component';

describe('ListaInicioComponent', () => {
  let component: ListaInicioComponent;
  let fixture: ComponentFixture<ListaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
