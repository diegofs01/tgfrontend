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

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
    this.sub = this.route.params.subscribe(params => {
      if(params['tipo'] === 'comPlaca') {
        this.placa = params['placa'];
        this.ocorrencia.placaVeiculo = this.placa;
        this.paginaAnterior = 'listaOcorrencia';
      } else {
        this.placa = '';
        this.ocorrencia.placaVeiculo = '';
        this.paginaAnterior = 'listaVeiculo';
      }
    });
    this.tipoOcorrenciaService.lista().subscribe(response => {
      this.tiposOcorrencias = response.json();
    });
  }

  salvar() {
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
    if(this.paginaAnterior === 'listaOcorrencia') {
      this.router.navigate(['/ocorrencia/listaOcorrencia', this.placa]);
    } else {
      this.router.navigate(['/ocorrencia/listaVeiculos']);
    }
  }

}
