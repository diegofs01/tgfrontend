import { TestBed, inject } from '@angular/core/testing';

import { TipoOcorrenciaService } from './tipo-ocorrencia.service';

describe('TipoOcorrenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoOcorrenciaService]
    });
  });

  it('should be created', inject([TipoOcorrenciaService], (service: TipoOcorrenciaService) => {
    expect(service).toBeTruthy();
  }));
});
