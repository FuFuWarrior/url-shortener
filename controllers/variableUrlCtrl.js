const db = require('../models/database');

  const {pool} = db;

exports.variableUrl = (req,res) => {
    const short = req.params.shortUrl
     pool.query('SELECT * FROM URLS WHERE short_url=$1;', [short])
    .then((result) => {
        if(result.rows[0] == null)
    {
        return res.sendStatus(404);
    }

    let newCount = result.rows[0].clicks + 1;
    const id = result.rows[0].url_id;
    pool.query('UPDATE URLS SET clicks=$1 where url_id=$2', [newCount,id])
    res.redirect(result.rows[0].full_url)
    })

    //
}
