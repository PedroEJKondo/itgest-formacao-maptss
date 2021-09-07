'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProdutoRepository = use("App/Repository/ProdutoRepository");
const Database = use('Database');

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {

  #prodRepo
  constructor() {
    this.#prodRepo = new ProdutoRepository();
  }

  /**
   * Show a list of all produtos.
   * GET produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ response }) {
    const prods = await this.#prodRepo.index();
    return response.json({data: prods});

  }

  /**
   * Create/save a new produto.
   * POST produtos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    
    const input = request.all();
    let prod = null;

    const trx = await Database.beginTransaction();
    try {
      prod = await this.#prodRepo.store(input);
    } catch (error) {
      await trx.rollback();
      return response.status(404).json({ data: null, message:'Erro ao registar'});
    }
    await trx.commit()
    return response.status(200).json({ data: prod, message:'sucesso ao registar'});
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    
    let prod = null;

    try {
      prod = await this.#prodRepo.show(params.id);
    } catch (error) {
      return response.status(404).json({ data: null, message:'Produto não existe'});
    }
    
    return response.status(200).json({ data: prod, message: null});
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    let prod = null;

    const trx = await Database.beginTransaction();
    try {
      prod = await this.#prodRepo.update(request.all(),params.id);
    } catch (error) {
      await trx.rollback();
      return response.status(404).json({ data: null, message:'Erro ao actualizar'});
    }
    await trx.commit()
    return response.status(200).json({ data: prod, message:'sucesso ao actualizar'});
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response }) {
    let prod = null;

    const trx = await Database.beginTransaction();
    try {
      prod = await this.#prodRepo.destroy(params.id);
    } catch (error) {
      await trx.rollback();
      return response.status(404).json({ data: null, message:'Erro ao eliminar'});
    }
    await trx.commit()
    return response.status(200).json({ data: prod, message:'sucesso ao eliminar'});
  }
}

module.exports = ProdutoController
