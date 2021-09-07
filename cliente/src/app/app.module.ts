import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ProdutoListComponent } from './componentes/produto/produto-list/produto-list.component';
import { ProdutoCreateComponent } from './componentes/produto/produto-create/produto-create.component';
import { ProdutoShowComponent } from './componentes/produto/produto-show/produto-show.component';
import { ProdutoDeleteComponent } from './componentes/produto/produto-delete/produto-delete.component';
import { ProdutoEditComponent } from './componentes/produto/produto-edit/produto-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutoListComponent,
    ProdutoCreateComponent,
    ProdutoShowComponent,
    ProdutoDeleteComponent,
    ProdutoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
