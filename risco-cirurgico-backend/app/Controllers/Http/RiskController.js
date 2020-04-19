'use strict'


/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Risk = use('App/Models/Risk');

class RiskController {
    async createRisk({request}) {
        const data = request.all()
        const risk = await Risk.create(data)
        return risk
    }

    async getRisk({request}) {
        const query = request.get()
        const risk = await Risk.where({_id: query.id}).first()
        return risk
    }

    async getAllRisks() {
        const data = await Risk.all()
        return data
    }
}

module.exports = RiskController
