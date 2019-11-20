import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCamarasComponent } from './lista-camaras.component';

describe('ListaCamarasComponent', () => {
  let component: ListaCamarasComponent;
  let fixture: ComponentFixture<ListaCamarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCamarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCamarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
