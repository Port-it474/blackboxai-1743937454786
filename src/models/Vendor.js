const knex = require('./db');

const createVendorTable = async () => {
  const exists = await knex.schema.hasTable('vendors');
  if (!exists) {
    return knex.schema.createTable('vendors', (table) => {
      table.increments('id').primary();
      table.string('business_name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('phone').notNullable();
      table.text('business_address').notNullable();
      table.string('tax_id');
      table.string('bank_account');
      table.timestamps(true, true);
    });
  }
};

module.exports = {
  createVendorTable,
  Vendor: knex('vendors')
};