require('dotenv').config();
const express = require('express');
// Import the router
const router = express.Router();
// Axios for making requests
const axios = require('axios');

router.get('/:searchParams', async (req, res) => {
    console.log('made it to get router');

    // Initial get request that retrieves the character
    const initialResponse = await axios({
        method: 'GET',
        url: 'https://swapi.dev/api/people/',
        params: {
            search: req.params.searchParams
        }
    })

    // Mapping through the films array, species, and starships
    const filmArray = initialResponse.data.results[0].films;
    const speciesArray = initialResponse.data.results[0].species;
    const starshipArray = initialResponse.data.results[0].starships;

    // Go back to the API and get those titles and names,
    // Wait to get all of the data before sending
    const filmResults = await Promise.all(
        filmArray.map(film => axios.get(film))
    )
    const speciesResults = await Promise.all(
        speciesArray.map(oneSpecies => axios.get(oneSpecies))
    )
    const starshipResults = await Promise.all(
        starshipArray.map(starship => axios.get(starship))
    )

    // Map through the results
    const filmTitles = filmResults.map(title => title.data.title);
    const speciesNames = speciesResults.map(name => name.data.name);
    const starshipNames = starshipResults.map(name => name.data.name);

    // Create an object to send back to the client
    let dataPacket = {
        character: initialResponse.data,
        characterFilms: filmTitles,
        characterSpecies: speciesNames,
        characterStarships: starshipNames
    }

    // Send back to the client
    res.send(dataPacket);
})

module.exports = router;