import { Curso } from '../../../model/curso.model';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../providers/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public cursos: Curso[];
  
  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit() {
    this.cursos = [];
    this.lista();
  }

  lista() {
    this.cursoService.lista().subscribe(response => {
      this.cursos = response.json();
    });
  }

  excluirCurso(id) {
    this.cursoService.excluir(id)
    .subscribe(response => {
      window.location.reload();
    });
  }
}
