import { TestBed,inject,async } from '@angular/core/testing';

import { CursoService } from './curso.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';



describe('CursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      CursoService,
    ],
  }));

  it('should be created', () => {
    const service: CursoService = TestBed.get(CursoService);
    expect(service).toBeTruthy();
  });

  it(`should be Curso_`, async(inject([HttpTestingController, CursoService],
    (httpClient: HttpTestingController, cursoService: CursoService) => {
      expect(cursoService).toBeTruthy();
  })));
});
