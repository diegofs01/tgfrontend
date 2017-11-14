import { VeiculoService } from '../../providers/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { 
  MatListModule,
  MatIconModule,
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-lista-veiculos',
  templateUrl: './lista-veiculos.component.html',
  styleUrls: ['./lista-veiculos.component.css']
})
export class ListaVeiculosComponent implements OnInit {

  public veiculos: Veiculo[];
  public filtroPlaca: string;

  public placa = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(
    private veiculoService: VeiculoService
  ) { }

  ngOnInit() {
    this.veiculos = [];
    this.lista();
  }

  lista() {
    this.veiculoService.lista().subscribe(response => {
      this.veiculos = response.json();
    });
  }

  filtrarVeiculo() {
    this.veiculos.forEach(veiculo => {
      if(veiculo.placa === this.filtroPlaca) {
        this.veiculos = [];
        this.veiculos.push(veiculo);
      }
    });
  }

  resetarFiltro() {
    this.lista();
  }

}
