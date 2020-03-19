const db = require('../models/database')

const {pool} = db;

exports.getAllUrls = (req,res) => {
  // res.render('index')
    pool.query('SELECT * FROM URLS')
    .then((results) => {
        const shortUrls = results.rows
        res.render('index.ejs', {shortUrls: shortUrls})
    })
    .catch((e) => console.log(e))
}
