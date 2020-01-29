import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioDetalhesComponent } from './components/usuario-detalhes/usuario-detalhes.component';
import { UsuarioNovoComponent } from './components/usuario-novo/usuario-novo.component';
import { DisciplinaNovoComponent } from './components/disciplina-novo/disciplina-novo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PlanoNovoComponent } from './components/plano-novo/plano-novo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoDetalhesComponent } from './components/plano-detalhes/plano-detalhes.component';
import { PlanoListComponent } from './components/plano-list/plano-list.component';
import { DisciplinaDetalhesComponent } from './components/disciplina-detalhes/disciplina-detalhes.component';
import { DisciplinaListaComponent } from './components/disciplina-lista/disciplina-lista.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'novoplano', component: PlanoNovoComponent },
  { path: 'novoplano/:id', component: PlanoNovoComponent },
  { path: 'detalhesplano/:id', component: PlanoDetalhesComponent },
  { path: 'listaplanos', component: PlanoListComponent },
  { path: 'novadisciplina', component: DisciplinaNovoComponent },
  { path: 'novadisciplina/:id', component: DisciplinaNovoComponent },
  { path: 'detalhesdisciplina/:id', component: DisciplinaDetalhesComponent },
  { path: 'listadisciplinas', component: DisciplinaListaComponent },
  { path: 'novousuario', component: UsuarioNovoComponent },
  { path: 'novousuario/:id', component: UsuarioNovoComponent },
  { path: 'detalhesusuario/:id', component: UsuarioDetalhesComponent },
  { path: 'listausuarios', component: UsuarioListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
