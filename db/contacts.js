const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    email: { type: String, required: true},
    favoriteColor: { type: String, required: true},
    birthday: { type: Date, required: true}
});

const Contact = mongoose.model('contact', contactSchema);

module.exports = Contact;