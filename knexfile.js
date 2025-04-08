module.exports = {
  client: 'sqlite3', // Change this to your database client (e.g., pg for PostgreSQL, mysql for MySQL)
  connection: {
    filename: './dev.sqlite3' // Path to your SQLite database file
  },
  useNullAsDefault: true, // Required for SQLite
  migrations: {
    directory: './src/migrations' // Path to your migrations directory
  }
};