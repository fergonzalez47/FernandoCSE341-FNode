const router = require('express').Router();
const { getAll, getById, newContact, updateContact, deleteContact } = require('../controllers/controller.js');

//swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');


router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


router.get('/contacts', getAll);
router.get('/contacts/:id', getById);

router.post('/contacts/', newContact);
router.put('/contacts/:id', updateContact);
router.delete('/contacts/:id', deleteContact)

module.exports = router;