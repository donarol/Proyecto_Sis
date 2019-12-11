import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { CamaraNuevoComponent } from './camara-nuevo.component';
import { SeleccionCursoComponent } from '../seleccion-curso/seleccion-curso.component';
import { SeleccionCursoIiComponent } from '../seleccion-curso-ii/seleccion-curso-ii.component';

describe('CamaraNuevoComponent', () => {
  let component: CamaraNuevoComponent;
  let fixture: ComponentFixture<CamaraNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        CamaraNuevoComponent,
        SeleccionCursoComponent,
        SeleccionCursoIiComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
