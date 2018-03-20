import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { 
  MatListModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material/';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OcorrenciaService } from './providers/ocorrencia.service';
import { VeiculoService } from './providers/veiculo.service';
import { AlunoService } from './providers/aluno.service';
import { TipoOcorrenciaService } from './providers/tipo-ocorrencia.service';
import { CursoService } from './providers/curso.service';

import { ListaComponent as AlunoLista} from './aluno/lista/lista.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AlunoLista,
    AlunoNovo,
    AlunoEditar,
    VeiculoLista,
    VeiculoNovo,
    VeiculoEditar,
    OcorrenciaLista,
    OcorrenciaNovo,
    OcorrenciaEditar,
    TipoOcorrenciaLista,
    TipoOcorrenciaEditar,
    TipoOcorrenciaNovo,
    CursoLista,
    CursoEditar,
    CursoNovo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    TextMaskModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [
    AlunoService,
    VeiculoService,
    OcorrenciaService,
    TipoOcorrenciaService,
    CursoService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
