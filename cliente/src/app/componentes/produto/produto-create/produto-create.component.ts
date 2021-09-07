import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/core/service/Produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  public produto:Produto = new Produto();
  public mensagem:string = null;
  submited:boolean = false;

  constructor(private prodService:ProdutoService) { }

  ngOnInit(): void { } 

  onSubmit(){
    this.prodService
    .post(this.produto)
    .subscribe(response => {
      this.mensagem = response?.message;
      this.onReload();
    }); 
  }

  onReload(){
    this.produto = new Produto();
  }

}
