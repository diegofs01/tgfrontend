import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public tiposOcorrencias: TipoOcorrencia[];

  constructor(
    private tipoOcorrenciaService: TipoOcorrenciaService
  ) { }

  ngOnInit() {
    this.tiposOcorrencias = [];
    this.lista();
  }

  lista() {
    this.tipoOcorrenciaService.lista().subscribe(response => {
      this.tiposOcorrencias = response.json();
    });
  }

  excluirTipoOcorrencia(id) {
    this.tipoOcorrenciaService.excluir(id)
    .subscribe(response => {
      window.location.reload();
    });
  }
}
