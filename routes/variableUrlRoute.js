const variableUrlRouter = require('express').Router();
const variableUrlCtrl = require('../controllers/variableUrlCtrl')

variableUrlRouter.get('/:shortUrl', variableUrlCtrl.variableUrl);

module.exports = variableUrlRouter;
