import { TestBed,inject,async} from '@angular/core/testing';


import { IngredientePlatoService } from './ingrediente-plato.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Ingrediente_Plato } from '../modelos/Ingrediente_Plato';
describe('IngredientePlatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      IngredientePlatoService,
    ],
  }));
  it('should be created', () => {
    const service: IngredientePlatoService = TestBed.get(IngredientePlatoService);
    expect(service).toBeTruthy();
  });  
  it(`should be IngredientePlato_`, async(inject([HttpTestingController, IngredientePlatoService],
    (httpClient: HttpTestingController, ingredientePlatoService: IngredientePlatoService) => {
      expect(ingredientePlatoService).toBeTruthy();
  })));
  it(`should issue a addIngredientePlato`,
  async(
    inject([HttpTestingController,IngredientePlatoService], 
      (backend: HttpTestingController,service: IngredientePlatoService) => {
      const model:Ingrediente_Plato=new Ingrediente_Plato;
      service.addIngredientePlato(model).subscribe((res)=>{
        expect(res.plato_id).toEqual(model.plato_id);
        expect(res.ingrediente_id).toEqual(model.ingrediente_id);
        expect(res.cantidad).toEqual(model.cantidad);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroIngredientePlato',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
});
