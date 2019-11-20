import { TestBed,inject,async} from '@angular/core/testing';

import { FamiliarService } from './familiar.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
describe('FamiliarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      FamiliarService,
    ],
  }));
  it('should be created', () => {
    const service: FamiliarService = TestBed.get(FamiliarService);
    expect(service).toBeTruthy();
  });
  it(`should be Familiar_`, async(inject([HttpTestingController, FamiliarService],
    (httpClient: HttpTestingController, familiarService: FamiliarService) => {
      expect(familiarService).toBeTruthy();
  })));
});
