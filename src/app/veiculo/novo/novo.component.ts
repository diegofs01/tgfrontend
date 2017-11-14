import { Router } from '@angular/router';
import { VeiculoService } from '../../providers/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  public veiculo: Veiculo;

  public placa = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(
    private veiculoService: VeiculoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.veiculo = {} as Veiculo;
  }

  salvar() {
    console.log(this.veiculo);
    this.veiculoService.save(this.veiculo)
    .subscribe(response => {
      console.log(response.json());
    });
    this.router.navigate(['/veiculo/lista']);
  }

  limparCampos() {
    this.veiculo = {} as Veiculo;
  }

}
