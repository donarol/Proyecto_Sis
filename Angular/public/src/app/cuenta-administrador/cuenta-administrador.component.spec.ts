import { async, ComponentFixture, TestBed,inject, fakeAsync } from '@angular/core/testing';

import { CuentaAdministradorComponent } from './cuenta-administrador.component';

import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PantallaCargaComponent } from '../pantalla-carga/pantalla-carga.component';
import { UserService } from '../servicios/user.service';
import { User } from '../modelos/User';
import { tick } from '@angular/core/src/render3';

describe('CuentaAdministradorComponent', () => {
  let component: CuentaAdministradorComponent;
  let fixture: ComponentFixture<CuentaAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ 
        CuentaAdministradorComponent,
        PantallaCargaComponent ],
      providers:[CuentaAdministradorComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be CuentaAdministradorComponent_`, async(inject([HttpTestingController, CuentaAdministradorComponent],
    (httpClient: HttpTestingController, cuentaAdministradorComponent: CuentaAdministradorComponent) => {
      expect(cuentaAdministradorComponent).toBeTruthy();
  })));
  it(
    'should get users',
    fakeAsync(()=>{
      
      //expect(component.model).toBeFalsy();
      component.model=new User;
      component.model.id="1";
      fixture.componentInstance.cargaUser();
      fixture.detectChanges();
      expect(component.model.id).toEqual(component.model.id);
    }))
});
