import { VeiculoService } from '../../providers/veiculo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit, OnDestroy {

  private sub: any;

  public veiculo: Veiculo;

  public placa = [/([A-Z]|[a-z])/, /([A-Z]|[a-z])/, /([A-Z]|[a-z])/, '-', /[1-9]/, /\d/, /\d/, /\d/];

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.veiculo = {} as Veiculo;
    this.sub = this.route.params.subscribe(params => {
      let placa = params['placa'];
      this.veiculoService.buscar(placa).subscribe(response => {
        this.veiculo = response.json();
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  salvar() {
    this.veiculoService.alterar(this.veiculo, this.veiculo.placa)
    .subscribe(response => {
      this.router.navigate(['/veiculo/lista']);
    });
  }

  excluir() {
    this.veiculoService.excluir(this.veiculo.placa)
    .subscribe(response => {
      this.router.navigate(['/veiculo/lista']);
    });
  }

}
