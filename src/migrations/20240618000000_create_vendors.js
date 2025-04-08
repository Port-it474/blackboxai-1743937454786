exports.up = function(knex) {
  return knex.schema.createTable('vendors', table => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('contact').notNullable();
    table.string('address').notNullable();
    table.string('category').notNullable().checkIn(['food', 'grocery', 'shopping', 'quick']);
    table.boolean('is_quick_commerce').defaultTo(false);
    table.integer('delivery_time_minutes');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendors');
};