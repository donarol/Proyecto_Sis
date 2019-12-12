import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { CamaraInicioComponent } from './camara-inicio.component';

describe('CamaraInicioComponent', () => {
  let component: CamaraInicioComponent;
  let fixture: ComponentFixture<CamaraInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ CamaraInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
