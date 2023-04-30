const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../db/contacts.js');
const route = express.Router();


// const contacts = [
//     {
//         firstName: 'Andrea',
//         lastName: 'Chacon',
//         email: 'andrea@example.com',
//         favoriteColor: 'blue',
//         birthday: new Date('1992-04-22')
//     },
//     {
//         firstName: 'Pierina',
//         lastName: 'valdez',
//         email: 'perinaaa@example.com',
//         favoriteColor: 'white',
//         birthday: new Date('1974-08-08')
//     },
//     {
//         firstName: 'Fernando',
//         lastName: 'Gonzalez',
//         email: 'fernand_25@example.com',
//         favoriteColor: 'blue',
//         birthday: new Date('1997-04-25')
//     }];

// Contact.insertMany(contacts)
//     .then(console.log("Contacts inserted"))
//     .catch((error) => {
//         console.log(error);
//     });

route.post('/', async (req, res) => {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    console.log(req.body);
    let contact = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        favoriteColor: favoriteColor,
        birthday: birthday
    };
    let contactModel = new Contact(contact);
    await contactModel.save();
    res.json(contactModel);

});

module.exports = route;