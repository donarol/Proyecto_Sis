import { TestBed,inject,async} from '@angular/core/testing';

import { PlatoService } from './plato.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PlatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      PlatoService,
    ],
  }));
  it('should be created', () => {
    const service: PlatoService = TestBed.get(PlatoService);
    expect(service).toBeTruthy();
  });
  it(`should be Plato_`, async(inject([HttpTestingController, PlatoService],
    (httpClient: HttpTestingController, platoService: PlatoService) => {
      expect(platoService).toBeTruthy();
  })));
});
