import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatListModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent  as AlunoLista} from './aluno/lista/lista.component';
import { AlunoService } from './providers/aluno.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunoLista
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
