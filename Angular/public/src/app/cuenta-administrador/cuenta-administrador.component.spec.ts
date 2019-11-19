import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { CuentaAdministradorComponent } from './cuenta-administrador.component';

import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PantallaCargaComponent } from '../pantalla-carga/pantalla-carga.component';

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
});
