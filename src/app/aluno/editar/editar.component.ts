import { AlunoService } from '../../providers/aluno.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {

  private sub: any;

  public aluno: Aluno;
  
  public rg = [/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /([1-9]|X|x)/];
  public cpf = [/[1-9]/, /\d/, /\d/, '-',  /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '/', /\d/, /\d/];
  public cep = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
  public telefone = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public celular = ['(', /[1-9]/, /\d/, ')',  ' ', /[9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  estados = [
    'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão',
    'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte',
    'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins',
  ];

  constructor(
    private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.aluno = {} as Aluno;
    this.sub = this.route.params.subscribe(params => {
      let ra = params['ra'];
      this.alunoService.buscar(ra).subscribe(response => {
        this.aluno = response.json();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  salvar() {
    console.log(this.aluno);
    this.alunoService.alterar(this.aluno, this.aluno.ra)
    .subscribe(response => {
      console.log(response.json());
    });
    this.router.navigate(['/aluno/lista']);
  }

  excluir() {
    this.alunoService.excluir(this.aluno.ra)
    .subscribe(response => {
      console.log(response.json());
    });
    this.router.navigate(['/aluno/lista']);
  }
}