const { Pool } = require('pg');
const dbHost = process.env.DB_HOST || 'localhost';
const pool = new Pool({
  user: 'postgres',
  host: dbHost,
  database: 'mydatabase',
  password: 'password',
  port: 5432,
});


async function queryDatabase(query) {
  try {
    const client = await pool.connect();
    const result = await client.query(query);
    client.release();
    return result.rows;
  } catch (err) {
    console.error('Error executing query:', err);
    throw err;
  }
}


async function main() {
  try {
    const query = 'SELECT * FROM mytable';
    const result = await queryDatabase(query);

    console.log('Query result:', result);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await pool.end();
  }
}

main();