const knex = require('./db');

const createDeliveryPartnerTable = async () => {
  const exists = await knex.schema.hasTable('delivery_partners');
  if (!exists) {
    return knex.schema.createTable('delivery_partners', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('phone').notNullable();
      table.string('vehicle_type');
      table.string('vehicle_number');
      table.boolean('available').defaultTo(true);
      table.timestamps(true, true);
    });
  }
};

module.exports = {
  createDeliveryPartnerTable,
  DeliveryPartner: knex('delivery_partners')
};