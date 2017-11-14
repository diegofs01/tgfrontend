import { environment } from '../../environments/environment';
import { TipoOcorrencia } from '../../model/tipoOcorrencia.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TipoOcorrenciaService {

  constructor(
    private http: Http
  ) { }

  save(tipoOcorrencia: TipoOcorrencia) {
    return this.http.post(environment.apiUrl + 'tipoOcorrencia', tipoOcorrencia);
  }

  lista() {
    return this.http.get(environment.apiUrl + 'tipoOcorrencia');
  }

  buscar(id: number) {
    return this.http.get(environment.apiUrl + 'tipoOcorrencia/' + id);
  }

  alterar(tipoOcorrencia: TipoOcorrencia, id: number) {
    return this.http.put(environment.apiUrl + 'tipoOcorrencia/' + id, tipoOcorrencia);
  }

  excluir(id: number) {
    return this.http.delete(environment.apiUrl + 'tipoOcorrencia/' + id);
  }
}
