import { TestBed,inject,async} from '@angular/core/testing';

import { IngredienteService } from './ingrediente.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
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
});
