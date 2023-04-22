const routes = require('express').Router();

const controller = require('../controllers/controller.js')

routes.get('/', controller.AndreaRouter);
routes.get('/pierina', controller.PierinaRouter);

module.exports = routes;