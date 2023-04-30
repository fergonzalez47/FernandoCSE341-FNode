const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ooz7nml.mongodb.net/test`;

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log("...MongoDB connected successfully!...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};


module.exports = connectDB;