'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Produto extends Model {
    
  static get table () {
    return 'produtos';
  }

  static get incrementing () {
    return true;
  }

}

module.exports = Produto
