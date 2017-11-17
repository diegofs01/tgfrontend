import { Router } from '@angular/router';
import { TipoOcorrenciaService } from '../../providers/tipo-ocorrencia.service';
import { TipoOcorrencia } from '../../../model/tipoOcorrencia.model';
import { Component, OnInit } from '@angular/core';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
} from '@angular/material';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public tipoOcorrencia: TipoOcorrencia;

  constructor(
    private tipoOcorrenciaService: TipoOcorrenciaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tipoOcorrencia = {} as TipoOcorrencia;
  }

  salvar() {
    console.log(this.tipoOcorrencia);
    this.tipoOcorrenciaService.save(this.tipoOcorrencia)
    .subscribe(response => {
      console.log(response.json());
      this.router.navigate(['/tipoOcorrencia/lista']);
    });
  }

  limparCampos() {
    this.tipoOcorrencia = {} as TipoOcorrencia;
  }
}
