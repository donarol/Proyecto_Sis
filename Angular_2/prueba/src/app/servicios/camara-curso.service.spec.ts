import { TestBed, inject, async } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { CamaraCursoService } from './camara-curso.service';
import { Camara_Curso } from '../modelos/Camara_Curso';

describe('CamaraCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      CamaraCursoService,
    ],
  }));

  it('should be created', () => {
    const service: CamaraCursoService = TestBed.get(CamaraCursoService);
    expect(service).toBeTruthy();
  });
  it(`should be AlumnoUser_`, async(inject([HttpTestingController, CamaraCursoService],
    (httpClient: HttpTestingController, camaraCursoService: CamaraCursoService) => {
      expect(camaraCursoService).toBeTruthy();
  })));
  it(`should issue a addAlumnoCurso`,
  async(
    inject([HttpTestingController,CamaraCursoService], 
      (backend: HttpTestingController,service: CamaraCursoService) => {
      const model:Camara_Curso=new Camara_Curso;
      model.curso_id='1';
      model.camara_id='1';
      service.addCamaraCurso(model).subscribe((res)=>{
        expect(res.camara_id).toEqual(model.camara_id);
        expect(res.curso_id).toEqual(model.curso_id);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroCamaraCurso',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
});
