import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit, Inject } from '@angular/core';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatSelectModule,
  MatDialogModule,
  MatDialog
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { DialogVeiculoNaoCadastradoComponent } from '../../dialog-veiculo-nao-cadastrado/dialog-veiculo-nao-cadastrado.component';
import { isDate } from 'util';

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
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
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
    this.router.navigate(['/ocorrencia/listaOcorrencia']);
  }

  openDialog(numero: number) {
    let dialogRef = this.dialog.open(DialogVeiculoNaoCadastradoComponent, {
      width: '600px',
      data: numero,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.salvar();
      }
    });
  }

  verificarVeiculo() {
    if(this.validarCadastro()) {

      this.ocorrencia.placaVeiculo = this.ocorrencia.placaVeiculo.toUpperCase();

      this.ocorrenciaService.verificarVeiculo(this.ocorrencia.placaVeiculo)
      .subscribe(response => {
        if(response.json() === 0) {
          this.openDialog(response.json());
        } else {
          this.salvar();
        }
      });
    }
  }

  validarCadastro(): boolean {
    if(this.ocorrencia.placaVeiculo === undefined) {
      return false;
    }
    if(this.ocorrencia.placaVeiculo === '') {
      return false;
    }
    if(this.ocorrencia.placaVeiculo.search('_') >= 0) {
      return false;
    }
    if(this.ocorrencia.data === undefined) {
      return false;
    }
    if(!isNaN(this.ocorrencia.data.valueOf())) {
      return false;
    }
    if(this.ocorrencia.hora === undefined) {
      return false;
    }
    if(this.ocorrencia.hora === '') {
      return false;
    }
    if(this.ocorrencia.tipoOcorrencia === undefined) {
      return false;
    }
    if(this.ocorrencia.descricao === undefined) {
      return false;
    }
    if(this.ocorrencia.descricao === '') {
      return false;
    }
    return true;
  }
}