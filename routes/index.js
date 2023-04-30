const router = require('express').Router();
const { getAll, getById } = require('../controllers/controller.js')



router.get('/contacts', getAll);
router.get('/contacts/:id', getById);

module.exports = router;