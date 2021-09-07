'use strict'

/*
|--------------------------------------------------------------------------
| ProdutoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Produto = use("App/Models/Produto");

class ProdutoSeeder {
  async run () {
    
    const prod = 
      { 
        nome: 'Massa',
        preco: 200, 
        qtd: 30
      };
    

    const novo = await Produto.create(prod);
    console.log(novo);
  }
}

module.exports = ProdutoSeeder
