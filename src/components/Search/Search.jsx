import './Search.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Bringing in Character Profile Component
import CharacterProfile from '../CharacterProfile/CharacterProfile';

// Component used for the search functionality for the app
function Search () {
    // Set up the dispatch feature
    const dispatch = useDispatch();
    // Creating a local state to take input that person
    // is typing and collecting the data
    const [searchParams, setSearchParams] = useState('');

    // Upon page load, I want to go to the API and 
    // get all the information for the species and films
    // And store them in the reducers so I can access them
    useEffect(() => {
        dispatch({type: 'FETCH_SPECIES'});
        dispatch({type: 'FETCH_FILMS'});
    }, []);

    // Grabbing the species and films from the database
    const speciesList = useSelector(store => store.speciesList);
    const filmsList = useSelector(store => store.filmsList);

    // Function for getting the searched character
    // Using redux to set the character to the store
    const fetchSearchedCharacter = (event) => {
        // Because there is a form, we don't want it to refresh on submit
        event.preventDefault();

        // Send the search parameters to the database to see if there is a match
        dispatch({
            type: 'FETCH_SEARCHED_CHARACTER',
            payload: searchParams
        })

        // Reset search parameters for user aesthetics
        setSearchParams('');

    }; // End of fetchSearchedCharacter function

    // When the client clicks on the "display films" button
    const handleFilms = (result) => {
        console.log(result);
    }     

    return (
        <>
        <form className="form">
            <p className="greeting">Welcome, Jedi</p>
                <input
                    className='inputField'
                    placeholder="Search Star Wars Character Here"
                    value={searchParams}
                    onChange={(event) => setSearchParams(event.target.value)}
                >
                </input>
                <br/>
                <button
                    className='searchButton'
                    onClick={(event) => fetchSearchedCharacter(event)}
                >
                    May the force be with you
                </button>
            </form>
            <CharacterProfile />
        </>
    )
}

export default Search;