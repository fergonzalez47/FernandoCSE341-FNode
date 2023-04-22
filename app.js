const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Andrea Chacon");
});

app.listen(process.env.port || 3000);
console.log("Web server is listening at port " + (process.env.port || 3000));


// **** ROUTERS ****


// const express = require('express');
// app = express();
// router = express.Router();

// router.get('/home', (req, res) => {
//     res.send("Hello World, this is a home router");
// });

// router.get('/profime', (req, res) => {
//     res.send("Hello World, this is a profime router");
// });

// router.get('/login', (req, res) => {
//     res.send("Hello World, this is a login router");
// });

// router.get('/logout', (req, res) => {
//     res.send("Hello World, this is a logout router");
// });

// app.use('/', router);

// app.listen(process.env.port || 3000);
// console.log('Web Server is listening at port ' + (process.env.port || 3000));