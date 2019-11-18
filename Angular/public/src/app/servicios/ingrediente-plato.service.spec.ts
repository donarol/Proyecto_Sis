import { TestBed,inject,async} from '@angular/core/testing';


import { IngredientePlatoService } from './ingrediente-plato.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
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
});
