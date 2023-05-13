const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// swaggerAutogen
const swaggerAutogen = require('swagger-autogen')();

// Configuración de body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to database
const connectDB = require('./db/connection.js');
connectDB();



// app.use('/api/contact', require('./API/api.js'));
const port = process.env.port || 8080;

app.use('/', require('./routes'));

app.listen(port);
console.log("Web server is listening at port ", port);
