import { Ocorrencia } from '../../../model/ocorrencia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { OcorrenciaService } from '../../providers/ocorrencia.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lista-ocorrencia',
  templateUrl: './lista-ocorrencia.component.html',
  styleUrls: ['./lista-ocorrencia.component.css']
})
export class ListaOcorrenciaComponent implements OnInit {

  public ocorrencias: Ocorrencia[];
  public sub: any;
  public placa: string;
  public listaVazia: boolean;

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ocorrencias = [];
    this.sub = this.route.params.subscribe(params => {
      this.placa = params['placa'];
      this.ocorrenciaService.listarByPlaca(this.placa).subscribe(response => {
        this.ocorrencias = response.json();
        console.log(this.ocorrencias.length);
        if(this.ocorrencias.length > 0) {
          this.listaVazia = false;
        } else {
          this.listaVazia = true;
        }
      });
    });
  }

  formataHora(ocorrencia: Ocorrencia) {
    let tempData = new Date(ocorrencia.data);
    tempData.setDate(tempData.getDate() + 1);
    return tempData.toLocaleDateString();
  }

}
