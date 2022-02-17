import { all } from 'redux-saga/effects';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Function of listeners to activate the requests
function* sagaListeners() {
    yield takeEvery('FETCH_SEARCHED_CHARACTER', fetchCharacter);
    yield takeEvery('FETCH_SPECIES', fetchSpecies);
    yield takeEvery('FETCH_FILMS', fetchFilms);
}

// Saga for retrieving character from SWAPI
function* fetchCharacter(action) {
    try {
        console.log('made it to fetch Character', action.payload)
        const response = yield axios.get(`/search/${action.payload}`);
        yield put({ 
            type: 'SET_CHARACTER',
            payload: response.data
        })
    }
    catch (error) {
        console.log('failed to fetch character', error);
    }
};

// Saga to go to API and get all the species
function* fetchSpecies() {
    try {
        const response = yield axios.get('/species');
        console.log('species response', response.data);
    }
    catch (error) {
        console.log('failed to get species', error);
    }
};

// Saga to go to API and get all the films
function* fetchFilms() {
    try {
        const response = yield axios.get('/films');
        console.log('film response', response.data);
    }
    catch (error) {
        console.log('failed to get films', error);
    }
};


export default function* rootSaga() {
    yield all([
        sagaListeners()
    ]);
};
