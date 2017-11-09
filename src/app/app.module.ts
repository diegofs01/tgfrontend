import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { 
  MatListModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material/';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent as AlunoLista} from './aluno/lista/lista.component';
import { AlunoService } from './providers/aluno.service';
import { NovoComponent as AlunoNovo } from './aluno/novo/novo.component';
import { EditarComponent as AlunoEditar } from './aluno/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunoLista,
    AlunoNovo,
    AlunoEditar
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
    MatSelectModule
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
