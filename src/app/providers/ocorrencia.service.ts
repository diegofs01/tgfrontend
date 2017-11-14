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

  buscar(placa: string, data: Date, hora: Date) {
    return this.http.get(environment.apiUrl + 'ocorrencia/' + placa + '?data=' + data + '&hora=' + hora);
  }

  alterar(ocorrencia: Ocorrencia, placa: string) {

    let tempData = new Date(ocorrencia.data);
    tempData.setHours(tempData.getHours() + 12);
    ocorrencia.data = tempData;
    
    return this.http.put(environment.apiUrl + 'ocorrencia/' + placa, ocorrencia);
  }

  excluir(ocorrencia: Ocorrencia) {
    return this.http.delete(environment.apiUrl + 'ocorrencia/' + ocorrencia.placaVeiculo + '?data=' + ocorrencia.data + '&hora=' + ocorrencia.hora);
  }

  listarByPlaca(placa: string) {
    return this.http.get(environment.apiUrl + 'ocorrencia/' + placa);
  }
}
