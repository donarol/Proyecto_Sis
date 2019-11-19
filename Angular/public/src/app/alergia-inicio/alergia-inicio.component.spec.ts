import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AlergiaInicioComponent } from './alergia-inicio.component';

describe('AlergiaInicioComponent', () => {
  let component: AlergiaInicioComponent;
  let fixture: ComponentFixture<AlergiaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ AlergiaInicioComponent ],
      providers:[AlergiaInicioComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
