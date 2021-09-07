import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/core/service/Produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  public produto = new Produto();
  public mensagem: string = null;

  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduto(this.getId());
  }

  public getId() {
    let id: number;
    this.route.params.subscribe((parametros) => {
      id = parametros['params'];
    });
    return id;
  }

  public getProduto(id: number) {
    this.prodService
      .show(id)
      .subscribe(response => {
        this.produto = response.data;
      })
  }

  onSubmit() {
    this.prodService
      .put(this.produto,this.getId())
      .subscribe(response => {
        this.mensagem = response.message;
        this.ngOnInit();
      });
  }

}
