import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutoCreateComponent } from './componentes/produto/produto-create/produto-create.component';
import { ProdutoDeleteComponent } from './componentes/produto/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './componentes/produto/produto-edit/produto-edit.component';
import { ProdutoListComponent } from './componentes/produto/produto-list/produto-list.component';
import { ProdutoShowComponent } from './componentes/produto/produto-show/produto-show.component';

const routes: Routes = [
  
  {path:'', redirectTo: 'produtos/list', pathMatch: 'full'},

  {path: 'produtos/list', component: ProdutoListComponent},

  {path: 'produtos/create', component: ProdutoCreateComponent},

  {path: 'produtos/show/:params', component: ProdutoShowComponent},

  {path: 'produtos/edit/:params', component: ProdutoEditComponent},

  {path: 'produtos/delete/:params', component: ProdutoDeleteComponent},

  // {path: '**', '': 'Página de erro'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
