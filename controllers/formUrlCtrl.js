const db = require('../models/database');
const shortId = require('shortid');
const {pool} = db;

exports.formUrl = (req, res) => {
    const fullUrl = req.body.fullUrl;
    const shortUrl = shortId.generate()
    const clicks = 0;
    pool.query('INSERT INTO URLS (full_url, short_url, clicks) VALUES($1, $2, $3) RETURNING*', [fullUrl, shortUrl, clicks])
    .then((result) => {
        res.redirect('/')
    })
    .catch((e) => console.log(e))
}

// // const generate = shortId.generate()
//     //const fullUrl = req.body.fullUrl
//     // INSERT into (full,short_url)  values($1, $2), [fullUrl, generate]
//     ShortUrl.create({full: req.body.fullUrl});
//     res.redirect('/');
