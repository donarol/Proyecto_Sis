import { TestBed,inject,async} from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,HttpClientModule
    ],
    providers: [
      LoginService,
    ],
  }));
  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
  it(`should be Login_`, async(inject([HttpTestingController, LoginService],
    (httpClient: HttpTestingController, loginService: LoginService) => {
      expect(loginService).toBeTruthy();
  })));
});
