'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RisksSchema extends Schema {
  up () {
    this.create('risks', (table) => {
      table.increments()
      table.string('name', 255).notNullable()
      table.date('birth_date').notNullable()
      table.string('sex', 30).notNullable()
      table.string('address', 255).notNullable()
      table.string('job', 255).notNullable()
      table.string('phone_number', 30)
      table.string('solicitant_doctor', 255).notNullable()
      table.string('surgery', 255).notNullable()
      table.float('weight', 2).notNullable()
      table.float('height',2).notNullable()
      table.float('imc' ,2).notNullable()
      table.string('estado_geral', 510)
      table.string('acv_pa_fc', 510).notNullable()
      table.string('ar_fr_sato', 510).notNullable()
      table.string('hematologics', 255).notNullable()
      table.string('torax_radiography', 255)
      table.string('echocardiogram', 255)
      table.string('electrocardiogram', 255)
      table.string('es_others', 510)
      table.string('pathological_history', 255)
      table.string('tabagism', 255)
      table.string('etilism', 255)
      table.string('functional_avaliation', 20).notNullable()
      table.string('acc_aha', 20).notNullable()
      table.string('physical_state_asa', 20).notNullable()
      table.string('ircr', 20).notNullable()
      table.string('acp_algorithm', 20).notNullable()
      table.string('risk_cardio', 20).notNullable()
      table.string('risk_cardio_suggestions')
      table.string('risk_lungs', 20).notNullable()
      table.string('risk_lungs_suggestions')
      table.string('risk_nefrologic', 20).notNullable()
      table.string('risk_nefrologic_suggestions')
      table.string('risk_hepatic', 20).notNullable()
      table.string('risk_hepatic_suggestions')
      table.string('risk_delirium', 20).notNullable()
      table.string('risk_delirium_suggestions')
      table.string('risk_bleeding', 20).notNullable()
      table.string('risk_bleeding_suggestions')
      table.string('risk_infection', 20).notNullable()
      table.string('risk_infection_suggestions')
      table.string('risk_thrombosis', 20).notNullable()
      table.string('risk_thrombosis_suggestions')
      table.string('risk_anticoag', 20).notNullable()
      table.string('risk_anticoag_suggestions')
      table.string('final_avaliation', 510).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('risks')
  }
}
module.exports = RisksSchema
