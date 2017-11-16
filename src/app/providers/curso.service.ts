import { Curso } from '../../model/curso.model';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {

  constructor(
    private http: Http
  ) { }

  save(curso: Curso) {
    return this.http.post(environment.apiUrl + 'curso', curso);
  }

  lista() {
    return this.http.get(environment.apiUrl + 'curso');
  }

  buscar(id: number) {
    return this.http.get(environment.apiUrl + 'curso/' + id);
  }

  alterar(curso: Curso, id: number) {
    return this.http.put(environment.apiUrl + 'curso/' + id, curso);
  }

  excluir(id: number) {
    return this.http.delete(environment.apiUrl + 'curso/' + id);
  }
}
