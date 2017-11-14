import { TestBed, inject } from '@angular/core/testing';

import { OcorrenciaService } from './ocorrencia.service';

describe('OcorrenciaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcorrenciaService]
    });
  });

  it('should be created', inject([OcorrenciaService], (service: OcorrenciaService) => {
    expect(service).toBeTruthy();
  }));
});
