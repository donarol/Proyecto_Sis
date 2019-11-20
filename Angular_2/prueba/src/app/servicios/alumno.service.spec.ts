import { TestBed,inject,async} from '@angular/core/testing';

import { AlumnoService } from './alumno.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Alumno } from '../modelos/Alumno';
describe('AlumnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      AlumnoService,
    ],
  }));

  it('should be created', () => {
    const service: AlumnoService = TestBed.get(AlumnoService);
    expect(service).toBeTruthy();
  });
  it(`should be Alumno_`, async(inject([HttpTestingController, AlumnoService],
    (httpClient: HttpTestingController, alumnoService: AlumnoService) => {
      expect(alumnoService).toBeTruthy();
  })));
  it(`should issue a addAlumno`,
  async(
    inject([HttpTestingController,AlumnoService], 
      (backend: HttpTestingController,service: AlumnoService) => {
      const model:Alumno=new Alumno;
      service.addAlumno(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
        expect(res.apellido).toEqual(model.apellido);
        expect(res.fecha_nacimiento).toEqual(model.fecha_nacimiento);
        expect(res.lugar_nacimiento).toEqual(model.lugar_nacimiento);
        expect(res.tipo_sanguineo).toEqual(model.tipo_sanguineo);
        expect(res.telefono).toEqual(model.telefono);
        expect(res.domicilio).toEqual(model.domicilio);
        expect(res.certificado_vacuna).toEqual(model.certificado_vacuna);
        expect(res.rude).toEqual(model.rude);
        expect(res.certificado_nacimiento).toEqual(model.certificado_nacimiento);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroAlumno',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
});
