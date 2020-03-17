const variableUrlRouter = require('express').Router();
const variableUrlCtrl = require('../controllers/variableUrlCtrl')

variableUrlRoute.get('/:shortUrl', variableUrlCtrl.variableUrl);

module.exports = variableUrlRouter;
