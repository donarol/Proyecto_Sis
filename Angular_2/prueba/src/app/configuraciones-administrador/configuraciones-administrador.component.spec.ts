import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { RouterTestingModule } from '@angular/router/testing';

import { ConfiguracionesAdministradorComponent } from './configuraciones-administrador.component';
import { PantallaCargaComponent } from '../pantalla-carga/pantalla-carga.component';

describe('ConfiguracionesAdministradorComponent', () => {
  let component: ConfiguracionesAdministradorComponent;
  let fixture: ComponentFixture<ConfiguracionesAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [
        ConfiguracionesAdministradorComponent,
        PantallaCargaComponent],
      providers:[ConfiguracionesAdministradorComponent]
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
  it(`should be ConfiguracionesAdministradorComponent_`, async(inject([HttpTestingController, ConfiguracionesAdministradorComponent],
    (httpClient: HttpTestingController, configuracionesAdministradorComponent: ConfiguracionesAdministradorComponent) => {
      expect(configuracionesAdministradorComponent).toBeTruthy();
  })));
});
