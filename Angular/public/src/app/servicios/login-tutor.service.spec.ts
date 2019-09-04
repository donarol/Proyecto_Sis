import { TestBed } from '@angular/core/testing';

import { LoginTutorService } from './login-tutor.service';

describe('LoginTutorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginTutorService = TestBed.get(LoginTutorService);
    expect(service).toBeTruthy();
  });
});
