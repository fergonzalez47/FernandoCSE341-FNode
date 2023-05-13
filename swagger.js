const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My Contacts API',
        description: 'API for getting, posting, updating and deleting contacts',
    },
    host: 'cse341-node-8fog.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);