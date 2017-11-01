import { AlunoService } from '../../providers/aluno.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatListModule, MatTableModule } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public alunos: Aluno[];
  public aluno: Aluno;

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
    this.alunos = [];
    this.lista();
  }

  lista() {
    this.alunoService.lista().subscribe(response => {
      this.alunos = response.json();
    })
  }

  save() {
    this.alunoService.save(this.aluno).subscribe(response => {
      console.log(response.json());
    });
  }

}

let alunos2 = this.alunos;

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(alunos2);
  }

  disconnect() {}
}