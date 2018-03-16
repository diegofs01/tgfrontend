import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaComponent as AlunoLista } from './aluno/lista/lista.component';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';

import { ListaComponent as VeiculoLista } from './veiculo/lista/lista.component';
import { NovoComponent as VeiculoNovo } from './veiculo/novo/novo.component';
import { EditarComponent as VeiculoEditar } from './veiculo/editar/editar.component';

import { ListaOcorrenciaComponent as OcorrenciaLista } from './ocorrencia/lista-ocorrencia/lista-ocorrencia.component';
import { NovoComponent as OcorrenciaNovo } from './ocorrencia/novo/novo.component';
import { EditarComponent as OcorrenciaEditar } from './ocorrencia/editar/editar.component';

import { ListaComponent as TipoOcorrenciaLista } from './tipo-ocorrencia/lista/lista.component';
import { EditarComponent as TipoOcorrenciaEditar } from './tipo-ocorrencia/editar/editar.component';
import { NovoComponent as TipoOcorrenciaNovo } from './tipo-ocorrencia/novo/novo.component';

import { ListaComponent as CursoLista } from './curso/lista/lista.component';
import { EditarComponent as CursoEditar } from './curso/editar/editar.component';
import { NovoComponent as CursoNovo } from './curso/novo/novo.component';

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
    path: 'ocorrencia/listaOcorrencia',
    component: OcorrenciaLista
  },
  {
    path: 'ocorrencia/novo',
    component: OcorrenciaNovo
  },
  {
    path: 'ocorrencia/editar/:numero',
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
  {
    path: 'curso/lista',
    component: CursoLista
  },
  {
    path: 'curso/novo',
    component: CursoNovo
  },
  {
    path: 'curso/editar/:id',
    component: CursoEditar
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
