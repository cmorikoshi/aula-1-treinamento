import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemUsuariosComponent } from './pages/usuarios/listagem/listagem.component';
import { CadastroEdicaoUsuariosComponent } from './pages/usuarios/cadastro-edicao/cadastro-edicao.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem/listagem.component';
import { CadastroEdicaoProdutosComponent } from './pages/produtos/cadastro-edicao/cadastro-edicao.component';
import { ListagemEdicaoProdutos1Component } from './pages/produtos1/listagem-edicao-produtos1/listagem-edicao-produtos1.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'usuarios', component: ListagemUsuariosComponent},
  {path:'usuarios/cadastrar', component: CadastroEdicaoUsuariosComponent},
  {path:'usuarios/editar/:id', component: CadastroEdicaoUsuariosComponent},
  {path:'produtos', component: ListagemProdutosComponent},
  {path:'produtos/cadastrar', component: CadastroEdicaoProdutosComponent},
  {path:'produtos/editar/:id', component: CadastroEdicaoProdutosComponent},
  {path:'produtos1', component: ListagemEdicaoProdutos1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
