const router = require('express').Router();
const { getAll, getById, newContact, updateContact, deleteContact } = require('../controllers/controller.js')



router.get('/contacts', getAll);
router.get('/contacts/:id', getById);


router.post('/contacts/add', newContact);
router.put('/contacts/update/:id', updateContact);
router.delete('/contacts/delete/:id', deleteContact)

module.exports = router;