import { TestBed,inject,async} from '@angular/core/testing';

import { IngredienteService } from './ingrediente.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Ingrediente } from '../modelos/Ingrediente';
describe('IngredienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      IngredienteService,
    ],
  }));
  it('should be created', () => {
    const service: IngredienteService = TestBed.get(IngredienteService);
    expect(service).toBeTruthy();
  });
  it(`should be Ingrediente_`, async(inject([HttpTestingController, IngredienteService],
    (httpClient: HttpTestingController, ingredienteService: IngredienteService) => {
      expect(ingredienteService).toBeTruthy();
  })));
  it(`should issue a addIngrediente`,
  async(
    inject([HttpTestingController,IngredienteService], 
      (backend: HttpTestingController,service: IngredienteService) => {
      const model:Ingrediente=new Ingrediente;
      service.addIngrediente(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.estado).toEqual(model.estado);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroIngrediente',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getIngrediente`,
  async(
    inject([HttpTestingController,IngredienteService], 
      (backend: HttpTestingController,service: IngredienteService) => {
      const model:Ingrediente=new Ingrediente;
      model.ingrediente_id='1';
      service.getIngrediente(model.ingrediente_id).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.estado).toEqual(model.estado);
      })
      backend.expectOne({
        url: `http://homestead.test/api/auth/ingrediente/${model.ingrediente_id}`,
        method: 'GET',    
      });
      backend.verify();
    })
  ));
  it(`should issue a updateIngrediente`,
  async(
    inject([HttpTestingController,IngredienteService], 
      (backend: HttpTestingController,service: IngredienteService) => {
      const model:Ingrediente=new Ingrediente;
      model.ingrediente_id='1';
      service.updateIngrediente(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.estado).toEqual(model.estado);
      })
      backend.expectOne({
        url: `http://homestead.test/api/auth/ingrediente/${model.ingrediente_id}`,
        method: 'PUT',    
      });
      backend.verify();
    })
  ));
});
