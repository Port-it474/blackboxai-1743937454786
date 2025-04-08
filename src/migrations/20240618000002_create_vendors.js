exports.up = function(knex) {
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
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('vendors');
};