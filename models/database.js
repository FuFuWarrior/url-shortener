const {Pool} = require('pg')

// connection config
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
});

pool.on('connect',() => console.log('working'))

// create url table
// const urls = async () => {
//     const urlsTable = `
//       CREATE TABLE IF NOT EXISTS
//       urls(
//           url_id  SERIAL PRIMARY KEY NOT NULL,
//           full_url VARCHAR(225) NOT NULL,
//           short_url VARCHAR(128) NOT NULL,
//           clicks INT
//          );`;
//     await pool.query(urlsTable)
//       .then(() => { console.log('urlsTable created');
//       })
//   };


  module.exports = {pool,urls}
