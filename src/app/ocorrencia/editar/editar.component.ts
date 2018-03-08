import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  public ocorrencia: Ocorrencia;
  public tiposOcorrencias: TipoOcorrencia[];
  public sub: any;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencia = {} as Ocorrencia;
    this.sub = this.route.params.subscribe(params => {
      this.ocorrenciaService.buscar(params['placa'], params['data'], params['hora']).subscribe(response => {
        this.ocorrencia = response.json();

        this.tipoOcorrenciaService.lista().subscribe(response => {
          this.tiposOcorrencias = response.json();
          this.ocorrencia.tipoOcorrencia = this.tiposOcorrencias.find(to => to.id === this.ocorrencia.tipoOcorrencia.id);
        });
      });
    });
  }

  salvar() {
    this.ocorrenciaService.alterar(this.ocorrencia, this.ocorrencia.placaVeiculo)
    .subscribe(response => {
      this.router.navigate(['/ocorrencia/listaOcorrencia']);
    });
  }

  excluir() {
    this.ocorrenciaService.excluir(this.ocorrencia)
    .subscribe(response => {
      this.router.navigate(['/ocorrencia/listaOcorrencia']);
    });
  }

}
