import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/service/Produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  public produtos:Produto[] = [];

  constructor(private prodService:ProdutoService) { }

  ngOnInit(): void {
    this.getAllProdutos();
  }

  public getAllProdutos(){
    this.prodService
        .index()
        .subscribe( (response:any) => 
          {
            this.produtos = response.data
              .map( (produtos:Produto) => 
              produtos
              );
          }
        );
  }

}
