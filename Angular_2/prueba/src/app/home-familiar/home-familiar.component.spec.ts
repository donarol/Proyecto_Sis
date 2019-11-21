import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFamiliarComponent } from './home-familiar.component';

describe('HomeFamiliarComponent', () => {
  let component: HomeFamiliarComponent;
  let fixture: ComponentFixture<HomeFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
