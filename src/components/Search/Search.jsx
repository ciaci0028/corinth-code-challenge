import './Search.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Component used for the search functionality for the app
function Search () {
    // Set up the dispatch feature
    const dispatch = useDispatch();
    // Creating a local state to take input that person
    // is typing and collecting the data
    const [searchParams, setSearchParams] = useState('');
    const character = useSelector(store => store.searchCharacter);

    // Upon page load, I want to go to the API and 
    // get all the information for the species and films
    // And store them in the reducers so I can access them
    useEffect(() => {
        dispatch({type: 'FETCH_SPECIES'});
        dispatch({type: 'FETCH_FILMS'})
    }, [])

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
            {character.results?.map(result => (
                <div key='1' className="results">
                    <h4>Character Profile for {result.name}</h4>
                    <>About:</><br/>
                    <>Height: {result.height}</><br/>
                    <>Weight: {result.mass}</><br/>
                    <>Hair Color: {result.hair_color}</><br/>
                    <>Birthdate: {result.birth_year}</><br/>
                </div>
            ))
            }
        </>
    )
}

export default Search;