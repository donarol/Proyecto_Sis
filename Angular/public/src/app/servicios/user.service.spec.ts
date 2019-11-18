import { TestBed,inject,async} from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      UserService,
    ],
  }));
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
  it(`should be User_`, async(inject([HttpTestingController, UserService],
    (httpClient: HttpTestingController, userService: UserService) => {
      expect(userService).toBeTruthy();
  })));
});
