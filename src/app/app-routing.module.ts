import { UsuarioListaComponent } from "./components/usuario-lista/usuario-lista.component";
import { UsuarioDetalhesComponent } from "./components/usuario-detalhes/usuario-detalhes.component";
import { UsuarioNovoComponent } from "./components/usuario-novo/usuario-novo.component";
import { DisciplinaNovoComponent } from "./components/disciplina-novo/disciplina-novo.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { PlanoNovoComponent } from "./components/plano-novo/plano-novo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlanoDetalhesComponent } from "./components/plano-detalhes/plano-detalhes.component";
import { PlanoListComponent } from "./components/plano-list/plano-list.component";
import { DisciplinaDetalhesComponent } from "./components/disciplina-detalhes/disciplina-detalhes.component";
import { DisciplinaListaComponent } from "./components/disciplina-lista/disciplina-lista.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "novo-plano", component: PlanoNovoComponent },
  { path: "novo-plano/:id", component: PlanoNovoComponent },
  { path: "detalhes-plano/:id", component: PlanoDetalhesComponent },
  { path: "lista-planos", component: PlanoListComponent },
  { path: "nova-disciplina", component: DisciplinaNovoComponent },
  { path: "nova-disciplina/:id", component: DisciplinaNovoComponent },
  { path: "detalhes-disciplina/:id", component: DisciplinaDetalhesComponent },
  { path: "lista-disciplinas", component: DisciplinaListaComponent },
  { path: "novo-usuario", component: UsuarioNovoComponent },
  { path: "novo-usuario/:id", component: UsuarioNovoComponent },
  { path: "detalhes-usuario/:id", component: UsuarioDetalhesComponent },
  { path: "lista-usuarios", component: UsuarioListaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
