import { async,inject,ComponentFixture,TestBed } from '@angular/core/testing';

import { AdministradorInicioComponent } from './administrador-inicio.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AdministradorInicioComponent', () => {
  let component: AdministradorInicioComponent;
  let fixture: ComponentFixture<AdministradorInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule,HttpClientModule,],
      declarations: [ AdministradorInicioComponent ],
      providers: [AdministradorInicioComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be AdministradorInicio_`, async(inject([HttpTestingController, AdministradorInicioComponent],
    (httpClient: HttpTestingController, administradorInicioComponent: AdministradorInicioComponent) => {
      expect(administradorInicioComponent).toBeTruthy();
  })));
});
