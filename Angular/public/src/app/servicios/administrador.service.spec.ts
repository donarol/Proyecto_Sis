import { TestBed,inject,async} from '@angular/core/testing';

import { AdministradorService } from './administrador.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../modelos/User';


describe('AdministradorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      AdministradorService,
    ],
  }));
  it('should be created', () => {
    const service: AdministradorService = TestBed.get(AdministradorService);
    expect(service).toBeTruthy();
  });

  it(`should be Administrador_`, async(inject([HttpTestingController, AdministradorService],
    (httpClient: HttpTestingController, administradorService: AdministradorService) => {
      expect(administradorService).toBeTruthy();
  })));
  it(`should issue a getPlatoIngredientes`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: AdministradorService = TestBed.get(AdministradorService);
      const administrador:User=new User;
      administrador.id='1';
      service.getCursosAdministrador(administrador).subscribe();
      backend.expectOne({
        url: `http://homestead.test/api/auth/administrador/${administrador.id}/cursos`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
});
