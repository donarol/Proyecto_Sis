import { TestBed,inject,async} from '@angular/core/testing';

import { AdministradorService } from './administrador.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


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
});
