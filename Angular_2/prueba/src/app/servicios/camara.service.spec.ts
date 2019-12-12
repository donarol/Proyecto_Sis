import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { CamaraService } from './camara.service';
import { Camara } from '../modelos/Camara';

describe('CamaraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers:[
      CamaraService
    ]
  }));

  it('should be created', () => {
    const service: CamaraService = TestBed.get(CamaraService);
    expect(service).toBeTruthy();
  });
  it(`should be Camara_`, async(inject([HttpTestingController, CamaraService],
    (httpClient: HttpTestingController, camaraService: CamaraService) => {
      expect(camaraService).toBeTruthy();
  })));
  it(`should issue a addCamara`,
  async(
    inject([HttpTestingController,CamaraService], 
      (backend: HttpTestingController,service: CamaraService) => {
      const model:Camara=new Camara;
      service.addCamara(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.address).toEqual(model.address);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroCamara',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getCamara`,
  async(
    inject([HttpTestingController,CamaraService], 
      (backend: HttpTestingController,service: CamaraService) => {
      const model:Camara=new Camara;
      model.camara_id='1';
      service.getCamara(model.camara_id).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.address).toEqual(model.address);
      })
      backend.expectOne({
        url: `http://homestead.test/api/auth/camara/${model.camara_id}`,
        method: 'GET',    
      });
      backend.verify();
    })
  ));
  it(`should issue a updateCamara`,
  async(
    inject([HttpTestingController,CamaraService], 
      (backend: HttpTestingController,service: CamaraService) => {
      const model:Camara=new Camara;
      model.camara_id='1';
      service.updateCamara(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.address).toEqual(model.address);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/camara/${model.camara_id}`,
        method: 'PUT',    
      });
      backend.verify();
    })
  ));
});
