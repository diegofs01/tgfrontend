import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VeiculoService {

  constructor(
    private http: Http
  ) { }

  save(veiculo: Veiculo) {
    return this.http.post(environment.apiUrl + 'veiculo', veiculo);
  }

  lista() {
    return this.http.get(environment.apiUrl + 'veiculo');
  }

  buscar(placa: string) {
    return this.http.get(environment.apiUrl + 'veiculo/' + placa);
  }

  alterar(veiculo: Veiculo, placa: string) {
    return this.http.put(environment.apiUrl + 'veiculo/' + placa, veiculo);
  }

  excluir(placa: string) {
    return this.http.delete(environment.apiUrl + 'veiculo/' + placa);
  }
}
