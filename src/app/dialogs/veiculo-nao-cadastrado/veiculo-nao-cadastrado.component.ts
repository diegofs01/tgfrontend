import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-veiculo-nao-cadastrado',
  templateUrl: './veiculo-nao-cadastrado.component.html',
  styleUrls: ['./veiculo-nao-cadastrado.component.css']
})
export class VeiculoNaoCadastradoComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<VeiculoNaoCadastradoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close(true);
  }

  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
