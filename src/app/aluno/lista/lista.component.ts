import { AlunoService } from '../../providers/aluno.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public alunos: Aluno[];
  public aluno: Aluno;
  public filtroAluno: string;

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
    });
  }

  save() {
    this.alunoService.save(this.aluno);
  }

  filtrarAluno() {
    this.alunos.forEach(aluno => {
      if(aluno.ra === this.filtroAluno) {
        this.alunos = [];
        this.alunos.push(aluno);
      }
    });
  }

  resetarFiltro() {
    this.lista();
    this.filtroAluno = '';
  }
}