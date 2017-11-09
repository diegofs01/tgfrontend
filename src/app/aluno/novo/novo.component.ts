import { AlunoService } from '../../providers/aluno.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

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
    private router: Router
  ) { }

  ngOnInit() {
    this.aluno = {} as Aluno;
  }

  salvar() {
    console.log(this.aluno);
    this.alunoService.save(this.aluno)
    .subscribe(response => {
      console.log(response.json());
    });
    this.router.navigate(['/aluno/lista']);
  }

  limparCampos() {
    this.aluno = {} as Aluno;
  }
}
