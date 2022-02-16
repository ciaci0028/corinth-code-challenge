require('dotenv').config();
// Express and body parsers
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Port to tell app where to listen
const port = process.env.PORT || 5000;

// Router variables
const searchRouter = require('./routes/search.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/search', searchRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});