import './Search.css';
import { useEffect } from 'react';

// Component used for the search functionality for the app
function Search () {

    // upon page load of /search, I want it to 
    // bring up the results of the searched characters
    useEffect({
        fetchSearchedCharacter();
    }, []);

    // Function for getting the searched character
    // Using redux to set the character to the store
    const fetchSearchedCharacter = () => {
        dispatchEvent({
            type: 'FETCH_SEARCHED_CHARACTER'
        })
    };

    return (
        <>
            <input
                className='inputField'
                placeholder="Search Star Wars Character Here"
            >
            </input>
        </>
    )
}

export default Search;