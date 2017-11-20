import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
} from '@angular/material';
import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {

  private sub: any;
  public tipoOcorrencia: TipoOcorrencia;

  constructor(
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoOcorrencia = {} as TipoOcorrencia;
    this.sub = this.route.params.subscribe(params => {
      this.tipoOcorrenciaService.buscar(params['id']).subscribe(response => {
        this.tipoOcorrencia = response.json();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  salvar() {
    this.tipoOcorrenciaService.alterar(this.tipoOcorrencia, this.tipoOcorrencia.id)
    .subscribe(response => {
      this.router.navigate(['/tipoOcorrencia/lista']);
    });
  }

  excluir() {
    this.tipoOcorrenciaService.excluir(this.tipoOcorrencia.id)
    .subscribe(response => {
      this.router.navigate(['/tipoOcorrencia/lista']);
    });
  }

}
