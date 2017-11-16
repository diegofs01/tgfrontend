import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso.model';
import { CursoService } from '../../providers/curso.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public curso: Curso;
  
    constructor(
      private cursoService: CursoService,
      private router: Router
    ) { }
  
    ngOnInit() {
      this.curso = {} as Curso;
    }
  
    salvar() {
      console.log(this.cursoService);
      this.cursoService.save(this.curso)
      .subscribe(response => {
        console.log(response.json());
      });
      this.router.navigate(['/curso/lista']);
    }
  
    limparCampos() {
      this.curso = {} as Curso;
    }

}
