import { TestBed,inject,async} from '@angular/core/testing';

import { TurnoService } from './turno.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('TurnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      TurnoService,
    ],
  }));
  it('should be created', () => {
    const service: TurnoService = TestBed.get(TurnoService);
    expect(service).toBeTruthy();
  }); 
  it(`should be Turno_`, async(inject([HttpTestingController, TurnoService],
    (httpClient: HttpTestingController, turnoService: TurnoService) => {
      expect(turnoService).toBeTruthy();
  })));
});
