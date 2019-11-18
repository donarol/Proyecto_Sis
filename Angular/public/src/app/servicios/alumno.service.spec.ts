import { TestBed,inject,async} from '@angular/core/testing';

import { AlumnoService } from './alumno.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
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
});
