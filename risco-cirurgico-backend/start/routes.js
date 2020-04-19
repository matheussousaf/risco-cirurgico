'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.post("create", "UserController.createUser")
    Route.get("get", "UserController.getUser")
    Route.post("auth", "UserController.authenticate")
}).prefix('user')

Route.group(() => {
    Route.post("create", "RiskController.createRisk")
    Route.get("get", "RiskController.getRisk")
    Route.get("list", "RiskController.getAllRisks")
}).prefix('risk')
