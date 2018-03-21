import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-veiculo-nao-cadastrado',
  templateUrl: './dialog-veiculo-nao-cadastrado.component.html',
  styleUrls: ['./dialog-veiculo-nao-cadastrado.component.css']
})
export class DialogVeiculoNaoCadastradoComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<DialogVeiculoNaoCadastradoComponent>, 
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
