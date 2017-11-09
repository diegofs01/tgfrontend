import { AlunoService } from '../../providers/aluno.service';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

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
    });
  }

  save() {
    this.alunoService.save(this.aluno).subscribe(response => {
      console.log(response.json());
    });
  }

}