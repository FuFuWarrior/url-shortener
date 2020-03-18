const {Pool} = require('pg')

// connection config
const pool = new Pool({
    user : process.env.PG_USER,
    password : process.env.PG_PW,
    host : process.env.PG_HOST,
    port :  process.env.PG_PORT,
    database : process.env.PG_DATABASE,
    // ssl: true
});

pool.on('connect',() => console.log('working'))

// create url table
const urls = async () => {
    const urlsTable = `
      CREATE TABLE IF NOT EXISTS
      urls(
          url_id  SERIAL PRIMARY KEY NOT NULL,
          full_url VARCHAR(225) NOT NULL,
          short_url VARCHAR(128) NOT NULL,
          clicks INT
         );`;
    await pool.query(urlsTable)
      .then(() => { console.log('urlsTable created');
      })
  };


  module.exports = {pool,urls}
