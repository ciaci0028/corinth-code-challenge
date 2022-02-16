import {combineReducers} from 'redux';

// This will be used to set the character in the store to the
// searched information that comes from SWAPI
const searchCharacter = (state = {}, action) => {
    switch(action.type) {
        // When 'SET_CHARACTER' is called, assign the information
        // from the API and store it in the store at store.searchCharacter
        case 'SET_CHARACTER':
        return action.payload;
    }
};


const rootReducer = combineReducers({
    searchCharacter
});

export default rootReducer;