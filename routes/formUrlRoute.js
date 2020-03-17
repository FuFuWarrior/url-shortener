const formUrlRouter = require('express').Router()
const formUrlCtrl = require('../controllers/formUrlCtrl')

formUrlRouter.post('/shortUrls', formUrlCtrl.formUrl)

module.exports = formUrlRouter