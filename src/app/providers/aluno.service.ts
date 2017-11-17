import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  constructor(
    private http: Http
  ) { }

  save(aluno: Aluno) {
    return this.http.post(environment.apiUrl + 'aluno', aluno);
  }

  lista() {
    return this.http.get(environment.apiUrl + 'aluno');
  }

  buscar(ra: string) {
    return this.http.get(environment.apiUrl + 'aluno/' + ra);
  }

  alterar(aluno: Aluno, ra: string) {
    return this.http.put(environment.apiUrl + 'aluno/' + ra, aluno);
  }

  excluir(ra: string) {
    return this.http.delete(environment.apiUrl + 'aluno/' + ra);
  }

}
