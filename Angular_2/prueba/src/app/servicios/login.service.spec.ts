import { TestBed,inject,async} from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../modelos/User';

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
  it(`should issue a login`,
  async(
    inject([HttpTestingController,LoginService], 
      (backend: HttpTestingController,service: LoginService) => {
      const model:User=new User;
      service.login(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/login',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a create`,
  async(
    inject([HttpTestingController,LoginService], 
      (backend: HttpTestingController,service: LoginService) => {
      const model:User=new User;
      service.create(model).subscribe((res)=>{
        expect(res.nombre).toEqual(model.nombre);
      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/signup',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
  it(`should issue a logout`,
  async(
    inject([HttpTestingController,LoginService], 
      (backend: HttpTestingController,service: LoginService) => {
      const model:User=new User;
      service.logout().subscribe();
      backend.expectOne({
        url: 'http://homestead.test/api/auth/logout',
        method: 'GET',    
      });
      backend.verify();
    })
  ));
});
