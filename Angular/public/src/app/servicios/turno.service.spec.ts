import { TestBed,inject,async} from '@angular/core/testing';

import { TurnoService } from './turno.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpBackend, HttpClient } from '@angular/common/http';
import { Turno } from '../modelos/Turno';

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

  it(`should issue a addTurno`,
  async(
    inject([HttpTestingController], (backend: HttpTestingController) => {
      const service: TurnoService = TestBed.get(TurnoService);
      const turno:Turno=new Turno;
      turno.nombre='turno 1';
      turno.gestion='2019';
      turno.monto=100;
      turno.hora_inicio='04:00:00';
      turno.hora_fin='07:00:00';
      service.addTurno(turno).subscribe((res)=>{
        expect(res.nombre).toEqual(turno.nombre);
        expect(res.gestion).toEqual(turno.gestion);
        expect(res.monto).toEqual(turno.monto);
        expect(res.hora_inicio).toEqual(turno.hora_inicio);
        expect(res.hora_fin).toEqual(turno.hora_fin);

      })
      backend.expectOne({
        url: 'http://homestead.test/api/auth/registroTurno',
        method: 'POST',    
      });
      backend.verify();
    })
  ));
 /* it(`should issue a getTurno`,
    async(
      inject([HttpTestingController], (backend: HttpTestingController) => {
        const service: TurnoService = TestBed.get(TurnoService);
        service.getTurno('2').subscribe();
        backend.expectOne({
          url: 'http://homestead.test/api/auth/turno/2',
          method: 'GET'
        });
        backend.verify();
        ----------------
        const service: TurnoService = TestBed.get(TurnoService);
        const turno:Turno=new Turno;
        turno.turno_id='2';
        turno.nombre='turno 1';
        turno.gestion='2019';
        turno.monto=100;
        turno.hora_inicio='04:00:00';
        turno.hora_fin='07:00:00';
        service.getTurno(turno.turno_id).subscribe((res)=>{
          expect(res.nombre).toEqual(turno.nombre);
        })
      })
    )
  );*/
  
  it(`should issue a updateTurno`,
    async(
      inject([HttpTestingController], (backend: HttpTestingController) => {
        const service: TurnoService = TestBed.get(TurnoService);
        const turno:Turno=new Turno;
        turno.turno_id='2';
        turno.nombre='turno 1';
        turno.gestion='2019';
        turno.monto=100;
        turno.hora_inicio='04:00:00';
        turno.hora_fin='07:00:00';
        service.updateTurno(turno).subscribe((res)=>{
          expect(res.nombre).toEqual(turno.nombre);
          expect(res.gestion).toEqual(turno.gestion);
          expect(res.monto).toEqual(turno.monto);
          expect(res.hora_inicio).toEqual(turno.hora_inicio);
          expect(res.hora_fin).toEqual(turno.hora_fin);
        });
        backend.expectOne({
          url: `http://homestead.test/api/auth/turno/${turno.turno_id}`,
          method: 'PUT',
          
        });
        backend.verify();
      })
    )
  );


});
