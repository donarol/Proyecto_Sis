import { TestBed,inject,async } from '@angular/core/testing';

import { AlumnoCursoService } from './alumno-curso.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Alumno_Curso } from '../modelos/Alumno_Curso';
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
  it(`should issue a addAlumnoCurso`,
  async(
    inject([HttpTestingController,AlumnoCursoService], 
      (backend: HttpTestingController,service: AlumnoCursoService) => {
      const model:Alumno_Curso=new Alumno_Curso;
      model.alumno_curso_id='1000';
      model.alumno_id='1';
      model.curso_id='1';
      model.estado=true;
      service.addAlumnoCurso(model).subscribe((res)=>{
        expect(res.alumno_id).toEqual(model.alumno_id);
        expect(res.curso_id).toEqual(model.curso_id);
        expect(res.estado).toEqual(model.estado);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroAlumnoCurso',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
});
