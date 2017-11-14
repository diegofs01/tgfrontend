import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';
import { ListaComponent as VeiculoLista } from './veiculo/lista/lista.component';
import { NovoComponent as VeiculoNovo } from './veiculo/novo/novo.component';
import { EditarComponent as VeiculoEditar } from './veiculo/editar/editar.component';
import { ListaVeiculosComponent as OcorrenciaListaVeiculos } from './ocorrencia/lista-veiculos/lista-veiculos.component';
import { ListaOcorrenciaComponent as OcorrenciaLista } from './ocorrencia/lista-ocorrencia/lista-ocorrencia.component';
import { NovoComponent as OcorrenciaNovo } from './ocorrencia/novo/novo.component';
import { EditarComponent as OcorrenciaEditar } from './ocorrencia/editar/editar.component';
import { ListaComponent as TipoOcorrenciaLista } from './tipo-ocorrencia/lista/lista.component';
import { EditarComponent as TipoOcorrenciaEditar } from './tipo-ocorrencia/editar/editar.component';
import { NovoComponent as TipoOcorrenciaNovo } from './tipo-ocorrencia/novo/novo.component';

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
  },
  {
    path: 'veiculo/lista',
    component: VeiculoLista
  }, 
  {
    path: 'veiculo/novo',
    component: VeiculoNovo
  },
  {
    path: 'veiculo/editar/:placa',
    component: VeiculoEditar
  }, 
  {
    path: 'ocorrencia/listaVeiculos',
    component: OcorrenciaListaVeiculos
  },
  {
    path: 'ocorrencia/listaOcorrencia/:placa',
    component: OcorrenciaLista
  },
  {
    path: 'ocorrencia/novo/:placa',
    component: OcorrenciaNovo
  }, 
  {
    path: 'ocorrencia/editar/:placa/:data/:hora',
    component: OcorrenciaEditar
  },
  {
    path: 'tipoOcorrencia/lista',
    component: TipoOcorrenciaLista
  },
  {
    path: 'tipoOcorrencia/novo',
    component: TipoOcorrenciaNovo
  },
  {
    path: 'tipoOcorrencia/editar/:id',
    component: TipoOcorrenciaEditar
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
