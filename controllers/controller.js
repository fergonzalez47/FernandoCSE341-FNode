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

const newContact = async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
        // Return an error if any of the required fields is missing
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        let contact = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            favoriteColor: favoriteColor,
            birthday: birthday
        };
        let contactModel = new Contact(contact);
        await contactModel.save();
        //Return the new contact ID in the response body
        res.json({ id: contactModel._id }); 

        console.log("--- Contact SAVED ---");
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error saving the new contact');
    }
}

const updateContact = async (req, res) => {
    try {
        const contactToUpdate = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(contactToUpdate)) {
            console.log(contactToUpdate);
            return res.status(400).send('Invalid contact ID');
            
        }
        const { firstName, lastName, email, favoriteColor, birthday } = req.body;
        let update = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            favoriteColor: favoriteColor,
            birthday: birthday
        };
        let updatedContact = await Contact.findByIdAndUpdate(contactToUpdate, update, { new: true });
        res.status(200).json({message: 'Contact Updated ',updatedContact: updatedContact});
        
        console.log("Contact updated:", updatedContact);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error updating the contact...');
    }
};

const deleteContact = async (req, res) => {
    const contactToDelete = req.params.id;
    try {
        const deletedContact = await Contact.findByIdAndDelete(contactToDelete);

        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({message: "Contact deleted"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error deleting the contact!');
    }
}

module.exports = { getAll, getById, newContact, updateContact, deleteContact };