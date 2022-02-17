require('dotenv').config();
const express = require('express');
// Import the router
const router = express.Router();
// Axios for making requests
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('made it to get film router');
    axios({
        method: 'GET',
        url: 'https://swapi.dev/api/films/',
    })
        .then((apiRes) => {
            console.log('**********FILMS**************', apiRes.data)
            res.send(apiRes.data);
        })
        .catch((error) => {
            console.log('error getting', error);
            res.sendStatus(500);
        })
})

module.exports = router;