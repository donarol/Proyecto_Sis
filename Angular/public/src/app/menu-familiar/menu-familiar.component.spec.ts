import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFamiliarComponent } from './menu-familiar.component';

describe('MenuFamiliarComponent', () => {
  let component: MenuFamiliarComponent;
  let fixture: ComponentFixture<MenuFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
