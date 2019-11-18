import { TestBed,inject,async} from '@angular/core/testing';

import { SeccionService } from './seccion.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('SeccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      SeccionService,
    ],
  }));
  it('should be created', () => {
    const service: SeccionService = TestBed.get(SeccionService);
    expect(service).toBeTruthy();
  });
  it(`should be Seccion_`, async(inject([HttpTestingController, SeccionService],
    (httpClient: HttpTestingController, seccionService: SeccionService) => {
      expect(seccionService).toBeTruthy();
  })));
});
