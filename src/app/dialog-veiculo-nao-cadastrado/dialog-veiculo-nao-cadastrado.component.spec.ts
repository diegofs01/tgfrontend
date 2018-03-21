import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVeiculoNaoCadastradoComponent } from './dialog-veiculo-nao-cadastrado.component';

describe('DialogVeiculoNaoCadastradoComponent', () => {
  let component: DialogVeiculoNaoCadastradoComponent;
  let fixture: ComponentFixture<DialogVeiculoNaoCadastradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogVeiculoNaoCadastradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVeiculoNaoCadastradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
