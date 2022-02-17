require('dotenv').config();
const express = require('express');
// Import the router
const router = express.Router();
// Axios for making requests
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('made it to get species router');
    axios({
        method: 'GET',
        url: 'https://swapi.dev/api/species/',
    })
        .then((apiRes) => {
            console.log('***********SPECIES*************', apiRes.data)
            res.send(apiRes.data);
        })
        .catch((error) => {
            console.log('error getting', error);
            res.sendStatus(500);
        })
})

module.exports = router;