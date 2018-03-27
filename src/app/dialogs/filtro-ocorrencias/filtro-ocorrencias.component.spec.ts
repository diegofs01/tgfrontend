import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroOcorrenciasComponent } from './filtro-ocorrencias.component';

describe('FiltroOcorrenciasComponent', () => {
  let component: FiltroOcorrenciasComponent;
  let fixture: ComponentFixture<FiltroOcorrenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroOcorrenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
