import { TestBed } from '@angular/core/testing';

import { AlumnoCursoService } from './alumno-curso.service';

describe('AlumnoCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoCursoService = TestBed.get(AlumnoCursoService);
    expect(service).toBeTruthy();
  });
});
