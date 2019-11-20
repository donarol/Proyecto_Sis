import { TestBed,inject,async} from '@angular/core/testing';

import { PlatoService } from './plato.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Plato } from '../modelos/Plato';

describe('PlatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      PlatoService,
    ],
  }));
  it('should be created', () => {
    const service: PlatoService = TestBed.get(PlatoService);
    expect(service).toBeTruthy();
  });
  it(`should be Plato_`, async(inject([HttpTestingController, PlatoService],
    (httpClient: HttpTestingController, platoService: PlatoService) => {
      expect(platoService).toBeTruthy();
  })));
  it(`should issue a addTurno`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const plato:Plato=new Plato;
      plato.nombre='Plato 100 Test';
      plato.preparacion='Con mucha sal';
      plato.fecha='2019-10-30';
      service.addPlato(plato).subscribe((res)=>{
        expect(res.nombre).toEqual(plato.nombre);
        expect(res.preparacion).toEqual(plato.preparacion);
        expect(res.fecha).toEqual(plato.fecha);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroPlato',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getPlato`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const plato:Plato=new Plato;
      plato.plato_id='1';
      plato.nombre='Plato 1';
      plato.preparacion='preparacion';
      plato.fecha='2019-10-28';
      service.getPlato(plato.plato_id).subscribe((res)=>{
        expect(res.nombre).toEqual(plato.nombre);
        expect(res.preparacion).toEqual(plato.preparacion);
        expect(res.fecha).toEqual(plato.fecha);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/plato/${plato.plato_id}`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
  it(`should issue a getPlato`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const fecha:String='2019-10-28';
      service.getPlatoFecha(fecha).subscribe();
      backend.expectOne({
        url: `http://homestead.test/api/auth/platoFecha/${fecha}`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
  it(`should issue a getPlatoIngredientes`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const id:String='1';
      service.getPlatoIngredientes(id).subscribe();
      backend.expectOne({
        url: `http://homestead.test/api/auth/plato/${id}/ingredientes`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
  it(`should issue a getPlato`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const plato:Plato=new Plato;
      plato.plato_id='1';
      plato.nombre='Plato 1';
      plato.preparacion='preparacion';
      plato.fecha='2019-10-28';
      service.getPlato(plato.plato_id).subscribe((res)=>{
        expect(res.nombre).toEqual(plato.nombre);
        expect(res.preparacion).toEqual(plato.preparacion);
        expect(res.fecha).toEqual(plato.fecha);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/plato/${plato.plato_id}`,
        method: 'GET',
        
      });
      backend.verify();
    })
  ));
  it(`should issue a updatePlato`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: PlatoService = TestBed.get(PlatoService);
      const plato:Plato=new Plato;
      plato.plato_id='1';
      plato.nombre='Plato 1';
      plato.preparacion='preparacion';
      plato.fecha='2019-10-28';
      service.updatePlato(plato).subscribe((res)=>{
        expect(res.nombre).toEqual(plato.nombre);
        expect(res.preparacion).toEqual(plato.preparacion);
        expect(res.fecha).toEqual(plato.fecha);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/plato/${plato.plato_id}`,
        method: 'PUT',
        
      });
      backend.verify();
    })
  ));
});
