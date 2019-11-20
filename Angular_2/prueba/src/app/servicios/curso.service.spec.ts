import { TestBed,inject,async } from '@angular/core/testing';

import { CursoService } from './curso.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Curso } from '../modelos/Curso';

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
  it(`should issue a addCurso`,
  async(
    inject([HttpTestingController,CursoService], 
      (backend: HttpTestingController,service: CursoService) => {
      const model:Curso=new Curso;
      service.addCurso(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.gestion).toEqual(model.gestion);
        expect(res.seccion_id).toEqual(model.seccion_id);
        expect(res.turno_id).toEqual(model.turno_id);
        expect(res.user_id).toEqual(model.user_id);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroCurso',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getCurso`,
  async(
    inject([HttpTestingController,CursoService], 
      (backend: HttpTestingController,service: CursoService) => {
      const model:Curso=new Curso;
      model.curso_id='1';
      service.getCurso(model.curso_id).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.gestion).toEqual(model.gestion);
        expect(res.seccion_id).toEqual(model.seccion_id);
        expect(res.turno_id).toEqual(model.turno_id);
        expect(res.user_id).toEqual(model.user_id);
      })
      backend.expectOne({
        url: `http://homestead.test/api/auth/curso/${model.curso_id}`,
        method: 'GET',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getCursoLista`,
  async(
    inject([HttpTestingController,CursoService], 
      (backend: HttpTestingController,service: CursoService) => {
      const model:Curso=new Curso;
      service.getCursoLista(model).subscribe();
      backend.expectOne({
        url: 'http://homestead.test/api/auth/cursoLista',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a getAlumnos`,
  async(
    inject([HttpTestingController,CursoService], 
      (backend: HttpTestingController,service: CursoService) => {
      const model:Curso=new Curso;
      model.curso_id='1';
      service.getAlumnos(model).subscribe();
      backend.expectOne({
        url: `http://homestead.test/api/auth/curso/${model.curso_id}/alumnos`,
        method: 'GET',    
      });
      backend.verify();
    })
  ));
  it(`should issue a updateCurso`,
  async(
    inject([HttpTestingController,CursoService], 
      (backend: HttpTestingController,service: CursoService) => {
      const model:Curso=new Curso;
      model.curso_id='1';
      service.updateCurso(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.gestion).toEqual(model.gestion);
        expect(res.seccion_id).toEqual(model.seccion_id);
        expect(res.turno_id).toEqual(model.turno_id);
        expect(res.user_id).toEqual(model.user_id);
      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/curso/${model.curso_id}`,
        method: 'PUT',    
      });
      backend.verify();
    })
  ));
});
