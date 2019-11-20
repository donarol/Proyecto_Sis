import { TestBed,inject,async} from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../modelos/User';

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

  it(`should issue a updateUser`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: UserService = TestBed.get(UserService);
      var user:User=new User;
      user.id='1';
      user.nombre='nombre a1';
      user.apellido='apellido a1';
      user.carnet='carnet a1';
      user.email='correo@example.com';
      user.telefono='telefono a1';
      service.updateUser(user).subscribe((res)=>{
        expect(res.nombre).toEqual(user.nombre);
        expect(res.apellido).toEqual(user.apellido);
        expect(res.carnet).toEqual(user.carnet);
        expect(res.email).toEqual(user.email);
        expect(res.telefono).toEqual(user.telefono);

      });
      backend.expectOne({
        url: `http://homestead.test/api/auth/user/${user.id}`,
        method: 'PUT',
        
      });
      backend.verify();
    })
  )
);
});
