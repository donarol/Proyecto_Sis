import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModificarComponent } from './menu-modificar.component';

describe('MenuModificarComponent', () => {
  let component: MenuModificarComponent;
  let fixture: ComponentFixture<MenuModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
