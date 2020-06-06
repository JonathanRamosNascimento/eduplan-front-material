import { AuthGuard } from './auth.guard';
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
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'novo-plano',
    component: PlanoNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'novo-plano/:id',
    component: PlanoNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detalhes-plano/:id',
    component: PlanoDetalhesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista-planos',
    component: PlanoListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nova-disciplina',
    component: DisciplinaNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'nova-disciplina/:id',
    component: DisciplinaNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detalhes-disciplina/:id',
    component: DisciplinaDetalhesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista-disciplinas',
    component: DisciplinaListaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'novo-usuario',
    component: UsuarioNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'novo-usuario/:id',
    component: UsuarioNovoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detalhes-usuario/:id',
    component: UsuarioDetalhesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'lista-usuarios',
    component: UsuarioListaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
