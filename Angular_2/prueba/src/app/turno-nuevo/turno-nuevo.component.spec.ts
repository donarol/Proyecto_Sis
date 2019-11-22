import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { TurnoNuevoComponent } from './turno-nuevo.component';
import { throwError, of } from 'rxjs';

describe('TurnoNuevoComponent', () => {
  let component: TurnoNuevoComponent;
  let fixture: ComponentFixture<TurnoNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ TurnoNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*it('should of isAdministrador_V', () => {
    spyOn(component['_user'],'getUserActual').and.returnValue(of({tipo:'Administrador'}));
    component.isAdministrador();
    expect(component.access).toBeTruthy();

  });*/
  it('should of isAdministrador_E', () => {
    spyOn(component['_user'],'getUserActual').and.returnValue(throwError({error:'error'}));
    component.isAdministrador();
    expect(component.errors[6].myError()).toBeTruthy();
  });
 /* it('should of isAdministrador_F', () => {
    spyOn(component['_user'],'getUserActual').and.returnValue(of({}));
    component.isAdministrador();
    expect(component.access).toBeFalsy();
  });*/

});
