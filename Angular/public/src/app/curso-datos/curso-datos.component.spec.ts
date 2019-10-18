import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDatosComponent } from './curso-datos.component';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('CursoDatosComponent', () => {
  let component: CursoDatosComponent;
  let fixture: ComponentFixture<CursoDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ CursoDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*
  describe('When ngOnInit() is called',()=>{
    it('all should be fine',()=>{
      spyOn(component._curso,'getCursos').and.returnValue(of({cursos:[]}));
      component.getCursos();
      expect(component.error).toBeFalsy();
    
    });
  });*/
});
