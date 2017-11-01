import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';

const routes: Routes = [
  {
    path: 'aluno/lista',
    component: AlunoLista
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
