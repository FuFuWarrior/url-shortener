const getAllUrlsRouter = require('express').Router();
const getAllUrlsCtrl = require('../controllers/getAllUrlsCtrl')

getAllUrlsRoute.get('/', getAllUrlsCtrl.getAllUrls)

module.exports = getAllUrlsRouter
