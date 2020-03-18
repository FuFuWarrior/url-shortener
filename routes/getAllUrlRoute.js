const getAllUrlsRouter = require('express').Router();
const getAllUrlsCtrl = require('../controllers/getAllUrlsCtrl')

getAllUrlsRouter.get('/', getAllUrlsCtrl.getAllUrls)

module.exports = getAllUrlsRouter
