const Contact = require('../db/contacts.js');
const mongoose = require('mongoose');

const getAll = async (req, res) => {
    try {
        const result = await Contact.find();

        res.status(200).json({ result });
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "error getting the contacts"})
    }
}

const getById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error. We are really sorry!' });
    }
};


module.exports = { getAll, getById };