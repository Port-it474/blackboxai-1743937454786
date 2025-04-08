const knex = require('./models/db');

async function initializeDatabase() {
  try {
    // Create customers table
    await knex.schema.createTableIfNotExists('customers', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.string('phone');
      table.text('address');
      table.timestamps(true, true);
    });

    // Create vendors table
    await knex.schema.createTableIfNotExists('vendors', (table) => {
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

    // Create delivery_partners table
    await knex.schema.createTableIfNotExists('delivery_partners', (table) => {
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

    console.log('Database tables created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await knex.destroy();
  }
}

initializeDatabase();