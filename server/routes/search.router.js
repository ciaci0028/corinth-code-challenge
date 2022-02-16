require('dotenv').config();
const express = require('express');
// Import the router
const router = express.Router();
// Axios for making requests
const axios = require('axios');

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'https://swapi.dev/api/people/?search=',
        params: {
            search: 'chew'
        }
    })
        .then((apiRes) => {
            console.log('************************', apiRes.data)
            res.send(apiRes.data);
        })
        .catch((error) => {
            console.log('error getting', error);
            res.sendStatus(500);
        })
})

module.exports = router;