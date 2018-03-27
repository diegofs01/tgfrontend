import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';

@Component({
  selector: 'app-filtro-ocorrencias',
  templateUrl: './filtro-ocorrencias.component.html',
  styleUrls: ['./filtro-ocorrencias.component.css']
})
export class FiltroOcorrenciasComponent implements OnInit {

  public tiposFiltro = [
    {valor: '', nome: 'Nenhum'},
    {valor: 'periodo/tipo', nome: 'Periodo E/OU Tipo'},
    {valor: 'veiculo', nome: 'Veiculo'},
    {valor: 'aluno', nome: 'Aluno'}
  ];

  public retorno = {
    filtro: '',
    ra: '',
    placa: '',
    periodoInicial: undefined,
    periodoFinal: undefined,
    idTipo: 0
  };

  public filtro: string;
  public ra: string;
  public placa: string;
  public tiposOcorrencias: TipoOcorrencia[];

  public periodoInicial: Date;
  public periodoFinal: Date;
  public idTipo: number;

  public placaVeiculo = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(public thisDialogRef: MatDialogRef<FiltroOcorrenciasComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: TipoOcorrencia[]) { }

  ngOnInit() {
    this.filtro = '';
    this.tiposOcorrencias = this.data;
    this.idTipo = 0;
  }

  onCloseConfirm() {
    if(this.filtro === 'aluno') {
      this.retorno.filtro = this.filtro;
      this.retorno.ra = this.ra;
    } else {
      if(this.filtro === 'veiculo') {
        this.retorno.filtro = this.filtro;
        this.retorno.placa = this.placa;
      } else {
        if(this.filtro === 'periodo/tipo') {
          this.retorno.filtro = this.filtro,
          this.retorno.periodoInicial = this.periodoInicial,
          this.retorno.periodoFinal = this.periodoFinal,
          this.retorno.idTipo = this.idTipo
        }
      }
    }
    
    this.thisDialogRef.close(this.retorno);
  }

  onCloseCancel() {
    this.thisDialogRef.close(this.retorno);
  }

}
