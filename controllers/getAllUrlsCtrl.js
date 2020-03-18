const db = require('../models/database')

const {pool} = db;

exports.getAllUrls = (req,res) => {
  res.send('HELLO NIGERIA')
    pool.query('SELECT * FROM URLS')
    .then((results) => {
        const shortUrls = results.rows
        res.render('index', {shortUrls: shortUrls})
    })
    .catch((e) => console.log(e))

}
