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

  
}
