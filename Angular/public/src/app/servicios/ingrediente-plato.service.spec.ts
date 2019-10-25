import { TestBed } from '@angular/core/testing';

import { IngredientePlatoService } from './ingrediente-plato.service';

describe('IngredientePlatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientePlatoService = TestBed.get(IngredientePlatoService);
    expect(service).toBeTruthy();
  });
});
