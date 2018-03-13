import { VeiculoService } from '../../providers/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public veiculos: Veiculo[];
  public veiculo: Veiculo;
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
    this.filtroPlaca = this.filtroPlaca.toUpperCase();
    console.log(this.filtroPlaca);
    let tempList = this.veiculos;
    this.veiculos = [];
    tempList.forEach(veiculo => {
      console.log(veiculo.placa);
      if(veiculo.placa === this.filtroPlaca) {
        this.veiculos.push(veiculo);
      }
    });
  }

  resetarFiltro() {
    this.lista();
    this.filtroPlaca = '';
  }
  
  excluirVeiculo(placa) {
    this.veiculoService.excluir(placa)
    .subscribe(response => {
      window.location.reload();
    });
  }
}
