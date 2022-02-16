import './Search.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// Component used for the search functionality for the app
function Search () {
    // Set up the dispatch feature
    const dispatch = useDispatch();
    // Creating a local state to take input that person
    // is typing and collecting the data
    const [searchParams, setSearchParams] = useState('');

    // Function for getting the searched character
    // Using redux to set the character to the store
    const fetchSearchedCharacter = (event) => {
        // Because there is a form, we don't want it to refresh on submit
        event.preventDefault();

        console.log('typing...', searchParams)
        dispatch({
            type: 'FETCH_SEARCHED_CHARACTER',
        })
    };

    return (
        <>
        <form>
                <input
                    className='inputField'
                    placeholder="Search Star Wars Character Here"
                    value={searchParams}
                    onChange={(event) => setSearchParams(event.target.value)}
                >
                </input>
                <button
                    onClick={(event) => fetchSearchedCharacter(event)}
                >
                    Search
                </button>
            </form>
        </>
    )
}

export default Search;