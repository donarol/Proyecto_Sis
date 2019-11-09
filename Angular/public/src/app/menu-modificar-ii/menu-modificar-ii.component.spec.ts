import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModificarIiComponent } from './menu-modificar-ii.component';

describe('MenuModificarIiComponent', () => {
  let component: MenuModificarIiComponent;
  let fixture: ComponentFixture<MenuModificarIiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModificarIiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModificarIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
