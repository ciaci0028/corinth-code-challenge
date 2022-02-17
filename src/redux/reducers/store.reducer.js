import {combineReducers} from 'redux';

// This will be used to set the character in the store to the
// searched information that comes from SWAPI
const searchCharacter = (state = {}, action) => {
    switch(action.type) {
        // When 'SET_CHARACTER' is called, assign the information
        // from the API and store it in the store at store.searchCharacter
        case 'SET_CHARACTER':
            return action.payload;
        case 'CLEAR_CHARACTER':
            return {};
        default:
            return state;
    }
};

// This will be called on page load to obtain all of the species
// from the API
const speciesList = (state = [], action) => {
    switch(action.type) {
        case 'SET_SPECIES':
            return action.payload;
        default:
            return state;
    }
};

// This will be called on page load to obtain all of the films
// from the API
const filmsList = (state = [], action) => {
    switch(action.type) {
        case 'SET_FILMS':
            return action.payload;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    searchCharacter,
    speciesList,
    filmsList
});

export default rootReducer;