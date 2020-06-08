import { MenuComponent } from './components/menu/menu.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlanoNovoComponent } from './components/plano-novo/plano-novo.component';
import { PlanoListComponent } from './components/plano-list/plano-list.component';
import { PlanoDetalhesComponent } from './components/plano-detalhes/plano-detalhes.component';
import { DisciplinaNovoComponent } from './components/disciplina-novo/disciplina-novo.component';
import { DisciplinaListaComponent } from './components/disciplina-lista/disciplina-lista.component';
import { DisciplinaDetalhesComponent } from './components/disciplina-detalhes/disciplina-detalhes.component';
import { UsuarioNovoComponent } from './components/usuario-novo/usuario-novo.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioDetalhesComponent } from './components/usuario-detalhes/usuario-detalhes.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlanoNovoComponent,
    PlanoListComponent,
    PlanoDetalhesComponent,
    DisciplinaNovoComponent,
    DisciplinaListaComponent,
    DisciplinaDetalhesComponent,
    UsuarioNovoComponent,
    UsuarioListaComponent,
    UsuarioDetalhesComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
