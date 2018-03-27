import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoNaoCadastradoComponent } from './veiculo-nao-cadastrado.component';

describe('VeiculoNaoCadastradoComponent', () => {
  let component: VeiculoNaoCadastradoComponent;
  let fixture: ComponentFixture<VeiculoNaoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculoNaoCadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoNaoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
