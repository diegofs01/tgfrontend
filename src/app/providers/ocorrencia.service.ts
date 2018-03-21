import { Ocorrencia } from '../../model/ocorrencia.model';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OcorrenciaService {

  constructor(
    private http: Http
  ) { }

  save(ocorrencia: Ocorrencia) {
    ocorrencia.hora = ocorrencia.hora.concat(':00');
    
    let tempData = new Date(ocorrencia.data);
    tempData.setHours(tempData.getHours() + 12);
    ocorrencia.data = tempData;
    
    return this.http.post(environment.apiUrl + 'ocorrencia', ocorrencia);
  }

  lista() {
    return this.http.get(environment.apiUrl + 'ocorrencia');
  }

  buscar(numero: number) {
    return this.http.get(environment.apiUrl + 'ocorrencia/' + numero);
  }

  alterar(ocorrencia: Ocorrencia, numero: number) {

    let tempData = new Date(ocorrencia.data);
    tempData.setHours(tempData.getHours() + 12);
    ocorrencia.data = tempData;
    
    return this.http.put(environment.apiUrl + 'ocorrencia/' + numero, ocorrencia);
  }

  excluir(numero: number) {
    return this.http.delete(environment.apiUrl + 'ocorrencia/' + numero);
  }

  listarByPlaca(placa: string) {
    return this.http.get(environment.apiUrl + 'ocorrencia/placa/' + placa);
  }

  verificarVeiculo(placa: string) {
    return this.http.get(environment.apiUrl + 'ocorrencia/verificarVeiculo/' + placa);
  }
}
