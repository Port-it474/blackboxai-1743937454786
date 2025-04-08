const knex = require('./db');

const createCustomerTable = async () => {
  const exists = await knex.schema.hasTable('customers');
  if (!exists) {
    return knex.schema.createTable('customers', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('phone');
      table.text('address');
      table.timestamps(true, true);
    });
  }
};

module.exports = {
  createCustomerTable,
  Customer: knex('customers')
};