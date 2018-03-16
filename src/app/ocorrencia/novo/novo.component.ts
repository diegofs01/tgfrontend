import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatSelectModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {
  
  public ocorrencia: Ocorrencia;
  public sub: any;
  public placa: string;
  public tiposOcorrencias: TipoOcorrencia[];
  public paginaAnterior: string;

  public hora = [/[0-2]/, /[0-9]/, ':', /[0-9]/, /[0-9]/, ':', /[0-9]/, /[0-9]/];
  public mascaraPlaca = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
    this.tipoOcorrenciaService.lista().subscribe(response => {
      this.tiposOcorrencias = response.json();
    });
  }

  salvar() {
    this.ocorrencia.placaVeiculo = this.ocorrencia.placaVeiculo.toUpperCase();
    this.ocorrenciaService.save(this.ocorrencia)
    .subscribe(response => {
      this.voltar();
    });
  }

  limparCampos() {
    this.ocorrencia = {} as Ocorrencia;
    this.ocorrencia.placaVeiculo = this.placa;
  }

  voltar() {
    this.router.navigate(['/ocorrencia/listaOcorrencia']);
  }

}
