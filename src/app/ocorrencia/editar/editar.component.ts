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
      this.ocorrenciaService.buscar(params['numero']).subscribe(response => {
        this.ocorrencia = response.json();

        this.tipoOcorrenciaService.lista().subscribe(response => {
          this.tiposOcorrencias = response.json();
          this.ocorrencia.tipoOcorrencia = this.tiposOcorrencias.find(to => to.id === this.ocorrencia.tipoOcorrencia.id);
        });
      });
    });
  }

  salvar() {
    this.ocorrenciaService.alterar(this.ocorrencia, this.ocorrencia.numero)
    .subscribe(response => {
      this.router.navigate(['/ocorrencia/listaOcorrencia']);
    });
  }

  excluir(numero: number) {
    this.ocorrenciaService.excluir(numero)
    .subscribe(response => {
      this.router.navigate(['/ocorrencia/listaOcorrencia']);
    });
  }

}
