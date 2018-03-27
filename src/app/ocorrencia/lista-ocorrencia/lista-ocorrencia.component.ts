import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule, MatSelectModule, MatDialog } from '@angular/material';
import { NgIf } from '@angular/common';
import { TextMaskModule } from 'angular2-text-mask';
import { VeiculoService } from '../../providers/veiculo.service';
import { FiltroOcorrenciasComponent } from '../../dialogs/filtro-ocorrencias/filtro-ocorrencias.component';

@Component({
  selector: 'app-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit {

  public tiposOcorrencias: TipoOcorrencia[];
  public ocorrencias: Ocorrencia[];
  public listaVazia: boolean;
  public listaComFiltro: boolean;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private veiculoService: VeiculoService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.ocorrencias = [];
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
    this.listaComFiltro = false;
  }

  formataData(ocorrencia: Ocorrencia) {
    let tempData = new Date(ocorrencia.data);
    tempData.setDate(tempData.getDate() + 1);
    return tempData.toLocaleDateString();
  }

  excluirOcorrencia(numero: number) {
    this.ocorrenciaService.excluir(numero)
    .subscribe(response => {
      window.location.reload();
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(FiltroOcorrenciasComponent, {
      width: '600px',
      data: this.tiposOcorrencias,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.filtro === 'aluno') {
        this.filtrarOcorrenciasByRA(result.ra);
      } else {
        if(result.filtro === 'veiculo') {
          this.filtrarOcorrenciasByVeiculo(result.placa);
        } else {
          if(result.filtro === 'periodo/tipo') {
            this.filtrarOcorrenciasByPeriodoETipo(result.periodoInicial, result.periodoFinal, result.idTipo);
          } else {
            this.listarVeiculos();
          }
        }
      }
    });
  }

  filtrarOcorrenciasByVeiculo(placa: string) {
    this.listaComFiltro = true;    
    this.ocorrencias = [];
    if(placa !== undefined && placa !== '' && placa.search('_') === -1) {
      placa = placa.toUpperCase();
      this.ocorrenciaService.listarByPlaca(placa).subscribe(data => {
        this.ocorrencias = data.json();
      });
    }
  }

  filtrarOcorrenciasByRA(ra: string) {
    this.listaComFiltro = true;
    this.ocorrencias = [];
    if(ra !== undefined && ra !== '') {
      let tempVeiculos = [];
      this.veiculoService.lista().subscribe(data => {
        let tempData = data.json();
        tempData.forEach(td => {
          if(td.raAluno === ra) {
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

  filtrarOcorrenciasByPeriodoETipo(periodoInicial: Date, periodoFinal: Date, idTipo: number) {
    if(idTipo !== 0 && 
      (periodoInicial === undefined || periodoInicial.toString() === '') && 
      (periodoFinal === undefined || periodoFinal.toString() === '')
      ) {
        this.filtroPorTipoOcorrencia(idTipo);
    }

    if(idTipo === 0 && 
      (periodoInicial !== undefined && periodoInicial.toString() !== '') && 
      (periodoFinal !== undefined && periodoFinal.toString() !== '')
      ) {
        this.filtroPorPeriodo(periodoInicial, periodoFinal);
    }

    if(idTipo !== 0 && 
      (periodoInicial !== undefined && periodoInicial.toString() !== '') && 
      (periodoFinal !== undefined && periodoFinal.toString() !== '')
      ) {
        this.filtroPorPeriodoETipo(periodoInicial, periodoFinal, idTipo);
    }
  }

  filtroPorTipoOcorrencia(idTipo: number) {
    this.listaComFiltro = true;
    let tempList = [];

    this.ocorrencias.forEach(oco => {
      if(oco.tipoOcorrencia.id === idTipo) {
        tempList.push(oco);
      }
    });
    this.ocorrencias = tempList;
  }

  filtroPorPeriodo(periodoInicial: Date, periodoFinal: Date) {
    this.listaComFiltro = true;
    if(periodoInicial <= periodoFinal) {
      let tempList = [];

      this.ocorrencias.forEach(oco => {
        if(oco.data >= periodoInicial && oco.data <= periodoFinal) {
          tempList.push(oco);
        }
      });
      this.ocorrencias = tempList;
    } 
  }

  filtroPorPeriodoETipo(periodoInicial: Date, periodoFinal: Date, idTipo: number) {
    this.listaComFiltro = true;
    if(periodoInicial <= periodoFinal) {
      let tempList = [];

      this.ocorrencias.forEach(oco => {
        if(oco.data >= periodoInicial && oco.data <= periodoFinal && oco.tipoOcorrencia.id === idTipo) {
          tempList.push(oco);
        }
      });
      this.ocorrencias = tempList;
    }
  }
}
