import { TestBed,inject,async} from '@angular/core/testing';

import { SeccionService } from './seccion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Seccion } from '../modelos/Seccion';

describe('SeccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      SeccionService,
    ],
  }));
  it('should be created', () => {
    const service: SeccionService = TestBed.get(SeccionService);
    expect(service).toBeTruthy();
  });
  it(`should be Seccion_`, async(inject([HttpTestingController, SeccionService],
    (httpClient: HttpTestingController, seccionService: SeccionService) => {
      expect(seccionService).toBeTruthy();
  })));


  it(`should issue a getSeccion`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: SeccionService = TestBed.get(SeccionService);
      const seccion:Seccion=new Seccion;
      seccion.seccion_id='1';
      seccion.nombre='Parbulario';
      seccion.descripcion='niños 4 años';
      service.getSeccion(seccion.seccion_id).subscribe((res)=>{
        expect(res.nombre).toEqual(seccion.nombre);
        expect(res.descripcion).toEqual(seccion.descripcion);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/seccion/${seccion.seccion_id}`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
  it(`should issue a updateSeccion`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: SeccionService = TestBed.get(SeccionService);
      const seccion:Seccion=new Seccion;
      seccion.seccion_id='1';
      seccion.nombre='Parbulario';
      seccion.descripcion='niños 4 años';
      service.updateSeccion(seccion).subscribe((res)=>{
        expect(res.nombre).toEqual(seccion.nombre);
        expect(res.descripcion).toEqual(seccion.descripcion);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/seccion/${seccion.seccion_id}`,
        method: 'PUT',
        
      });
      backend.verify();
    })
  ));
});
