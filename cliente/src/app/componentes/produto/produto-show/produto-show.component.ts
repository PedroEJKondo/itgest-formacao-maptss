import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/core/service/Produto.service';
import { Produto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto-show',
  templateUrl: './produto-show.component.html',
  styleUrls: ['./produto-show.component.css']
})
export class ProdutoShowComponent implements OnInit {

  public produto: Produto = new Produto();
  public mensagem: string = null;

  constructor(
    private prodService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

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
        this.mensagem = response.message; 
      });
  }

  public eliminar(){
    this.prodService
      .delete(this.getId())
      .subscribe(response => { 
        this.router.navigate(['/']);
      })
  } 

}
