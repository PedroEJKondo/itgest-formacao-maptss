"use strict";

const Produto = use("App/Models/Produto");

class ProdutoRepository {
  
  async index(){
    const prods = await Produto.all();
    return prods;
  }

  async show(id){
    const prod = await Produto.find(id);

    if(!prod){ 
      throw new false; 
    }

    return prod;

  }

  async store(input){
  
    const prod = await Produto.create(input);
    return prod;
  }

  async update(input, id){

    let prod = await Produto.find(id);
    
    if(!prod){ throw new false; }

    prod.merge(input);
    await prod.save();
    // prod.name = input.name;
    // prod.preco = input.preco;
    // prod.qtd = input.qtd;

    return prod;
  }

  async destroy(id){

    const prod = await Produto.find(id);
    
    if(!prod){ throw new false; }

    prod.delete();

    return prod;
  }
}

module.exports = ProdutoRepository;
