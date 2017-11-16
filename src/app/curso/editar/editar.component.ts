import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../providers/curso.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private sub: any;
  public curso: Curso;

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.curso = {} as Curso;
    this.sub = this.route.params.subscribe(params => {
      this.cursoService.buscar(params['id']).subscribe(response => {
        this.curso = response.json();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  salvar() {
    console.log(this.curso);
    this.cursoService.alterar(this.curso, this.curso.id)
    .subscribe(response => {
      console.log(response.json());
      this.router.navigate(['/curso/lista']);
    });
  }

  excluir() {
    this.cursoService.excluir(this.curso.id)
    .subscribe(response => {
      console.log(response.json());
      this.router.navigate(['/curso/lista']);
    });
  }

}
