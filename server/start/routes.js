'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Criando uma api usando adonisjs 09/2021' }
})


Route.group(() => {
  Route.get('/produtos','ProdutoController.index');
  Route.post('/produtos','ProdutoController.store');
  Route.get('/produtos/:id','ProdutoController.show');
  Route.put('/produtos/:id','ProdutoController.update');
  Route.delete('/produtos/:id','ProdutoController.destroy');
})
