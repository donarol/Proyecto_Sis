import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//PARA NGMODEL,NGCLASS....
import { FormsModule } from '@angular/forms';
//PARA HTTP
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
//PARA ROUTERLINK ...
import { RouterTestingModule } from '@angular/router/testing';

import { AlumnoDatosFamiliarComponent } from './alumno-datos-familiar.component';

describe('AlumnoDatosFamiliarComponent', () => {
  let component: AlumnoDatosFamiliarComponent;
  let fixture: ComponentFixture<AlumnoDatosFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [ AlumnoDatosFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoDatosFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
