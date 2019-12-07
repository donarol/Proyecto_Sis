import { TestBed } from '@angular/core/testing';

import { CamaraCursoService } from './camara-curso.service';

describe('CamaraCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamaraCursoService = TestBed.get(CamaraCursoService);
    expect(service).toBeTruthy();
  });
});
