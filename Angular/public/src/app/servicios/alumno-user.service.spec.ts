import { TestBed,inject,async} from '@angular/core/testing';

import { AlumnoUserService } from './alumno-user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

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
});
