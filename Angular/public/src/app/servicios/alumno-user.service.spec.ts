import { TestBed } from '@angular/core/testing';

import { AlumnoUserService } from './alumno-user.service';

describe('AlumnoUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnoUserService = TestBed.get(AlumnoUserService);
    expect(service).toBeTruthy();
  });
});
