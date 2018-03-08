import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule, MatSelectModule } from '@angular/material';
import { NgIf } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { VeiculoService } from '../../providers/veiculo.service';

@Component({
  selector: 'app-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit {

  public tiposFiltro = [
    {valor: '', nome: 'Nenhum'},
    {valor: 'periodo', nome: 'Periodo'},
    {valor: 'tipoOcorrencia', nome: 'Tipo de Ocorrencia'},
    {valor: 'veiculo', nome: 'Veiculo'},
    {valor: 'aluno', nome: 'Aluno'}
  ];

  public tiposOcorrencias: TipoOcorrencia[];
  public ocorrencias: Ocorrencia[];
  public filtro: string;
  public listaVazia: boolean;

  public placa: string;
  public ra: string;
  public idTipo: number;
  public filtradoTipo: boolean;
  public periodoInicial: Date;
  public periodoFinal: Date;

  public placaVeiculo = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private veiculoService: VeiculoService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencias = [];
    this.filtro = '';
    this.listarVeiculos();
    this.tipoOcorrenciaService.lista().subscribe(response => {
      this.tiposOcorrencias = response.json();
      this.tiposOcorrencias.unshift({id: 0, nome: 'Nenhum'})
    });
  }

  listarVeiculos() {
    this.ocorrenciaService.lista().subscribe(response => {
      this.ocorrencias = response.json();
      if(this.ocorrencias.length > 0) {
        this.listaVazia = false;
      } else {
        this.listaVazia = true;
      }
    });
    this.placa = '';
    this.ra = '';
    this.idTipo = 0;
  }

  formataHora(ocorrencia: Ocorrencia) {
    let tempData = new Date(ocorrencia.data);
    tempData.setDate(tempData.getDate() + 1);
    return tempData.toLocaleDateString();
  }

  consultarVeiculo() {
    this.ocorrencias = [];
    if(this.placa !== undefined && this.placa !== '') {
      this.placa = this.placa.toUpperCase();
      this.ocorrenciaService.listarByPlaca(this.placa).subscribe(data => {
        this.ocorrencias = data.json();
      });
    }
  }

  filtrarOcorrenciasByRA() {
    this.ocorrencias = [];
    if(this.ra !== undefined && this.ra !== '') {
      let tempVeiculos = [];
      this.veiculoService.lista().subscribe(data => {
        let tempData = data.json();
        tempData.forEach(td => {
          if(td.raAluno === this.ra) {
            tempVeiculos.push(td);
          }
        });
        tempVeiculos.forEach(vei => {
          this.ocorrenciaService.listarByPlaca(vei.placa).subscribe(data => {
            this.ocorrencias = this.ocorrencias.concat(data.json());
          });
        });
      });
    }
  }

  filtrarOcorrenciasByTipo(id: Number) {
    if(id > 0) {
      this.ocorrencias = [];
      let tempList = [];
      this.ocorrenciaService.lista().subscribe(data => {
        this.ocorrencias = data.json();
        this.ocorrencias.forEach(oco => {
          if(oco.tipoOcorrencia.id === id) {
            tempList.push(oco);
          }
        });
        this.ocorrencias = tempList;
      });
    } else {
      this.ocorrencias = [];
    }
  }

  filtrarOcorrenciasByPeriodo() {
    if(this.periodoInicial <= this.periodoFinal) {
      this.ocorrencias = [];
      let tempList: any;

      this.ocorrenciaService.lista().subscribe(data => {
        tempList = data.json();
        tempList.forEach(oco => {
          if(oco.data >= this.periodoInicial && oco.data <= this.periodoFinal) {
            this.ocorrencias.push(oco);
          }
        });
      });
    } else {
      this.ocorrencias = [];
    }
  }

  excluirOcorrencia(ocorrencia) {
    this.ocorrenciaService.excluir(ocorrencia)
    .subscribe(response => {
      window.location.reload();
    });
  }
}
