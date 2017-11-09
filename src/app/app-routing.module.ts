import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';

const routes: Routes = [
  {
    path: 'aluno/lista',
    component: AlunoLista
  }, 
  {
    path: 'aluno/novo',
    component: AlunoNovo
  },
  {
    path: 'aluno/editar/:ra',
    component: AlunoEditar
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
