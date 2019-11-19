import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CuentaFamiliarComponent } from './cuenta-familiar.component';

describe('CuentaFamiliarComponent', () => {
  let component: CuentaFamiliarComponent;
  let fixture: ComponentFixture<CuentaFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ CuentaFamiliarComponent ],
      providers:[CuentaFamiliarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should be CuentaFamiliarComponent_`, async(inject([HttpTestingController, CuentaFamiliarComponent],
    (httpClient: HttpTestingController, cuentaFamiliarComponent: CuentaFamiliarComponent) => {
      expect(cuentaFamiliarComponent).toBeTruthy();
  })));
});
