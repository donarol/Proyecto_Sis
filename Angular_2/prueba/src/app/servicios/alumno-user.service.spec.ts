import { TestBed,inject,async} from '@angular/core/testing';

import { AlumnoUserService } from './alumno-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Alumno_User } from '../modelos/Alumno_User';

describe('AlumnoUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      AlumnoUserService,
    ],
  }));
  it('should be created', () => {
    const service: AlumnoUserService = TestBed.get(AlumnoUserService);
    expect(service).toBeTruthy();
  });
  it(`should be AlumnoUser_`, async(inject([HttpTestingController, AlumnoUserService],
    (httpClient: HttpTestingController, alumnoUserService: AlumnoUserService) => {
      expect(alumnoUserService).toBeTruthy();
  })));
  it(`should issue a addAlumnoCurso`,
  async(
    inject([HttpTestingController,AlumnoUserService], 
      (backend: HttpTestingController,service: AlumnoUserService) => {
      const model:Alumno_User=new Alumno_User;
      model.alumno_id='1';
      model.user_id='1';
      model.parentesco='Padre';
      service.addAlumnoUser(model).subscribe((res)=>{
        expect(res.alumno_id).toEqual(model.alumno_id);
        expect(res.user_id).toEqual(model.user_id);
        expect(res.parentesco).toEqual(model.parentesco);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroAlumnoUser',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
});
