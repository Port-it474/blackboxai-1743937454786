exports.up = function(knex) {
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
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('delivery_partners');
};