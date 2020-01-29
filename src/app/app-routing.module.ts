import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PlanoNovoComponent } from './components/plano-novo/plano-novo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoDetalhesComponent } from './components/plano-detalhes/plano-detalhes.component';
import { PlanoListComponent } from './components/plano-list/plano-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'novoplano', component: PlanoNovoComponent },
  { path: 'novoplano/:id', component: PlanoNovoComponent },
  { path: 'detalhesplano/:id', component: PlanoDetalhesComponent },
  { path: 'listaplanos', component: PlanoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
