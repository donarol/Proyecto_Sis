import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { CamaraDatosComponent } from './camara-datos.component';

describe('CamaraDatosComponent', () => {
  let component: CamaraDatosComponent;
  let fixture: ComponentFixture<CamaraDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ CamaraDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
