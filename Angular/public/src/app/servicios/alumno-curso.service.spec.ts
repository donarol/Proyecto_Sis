import { TestBed,inject,async } from '@angular/core/testing';

import { AlumnoCursoService } from './alumno-curso.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('AlumnoCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      AlumnoCursoService,
    ],
  }));
  it('should be created', () => {
    const service: AlumnoCursoService = TestBed.get(AlumnoCursoService);
    expect(service).toBeTruthy();
  });
  it(`should be AlumnoCurso_`, async(inject([HttpTestingController, AlumnoCursoService],
    (httpClient: HttpTestingController, alumnoCursoService: AlumnoCursoService) => {
      expect(alumnoCursoService).toBeTruthy();
  })));
});
