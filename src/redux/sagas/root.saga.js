import { all } from 'redux-saga/effects';
import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// Function of listeners to activate the requests
function* sagaListeners() {
    yield takeEvery('FETCH_SEARCHED_CHARACTER', fetchCharacter);
}

// Saga for retrieving character from SWAPI
function* fetchCharacter(action) {
    try {
        console.log('made it to fetch Character', action.payload)
        const response = yield axios.get(`/search/${action.payload}`);
        console.log('response is', response.data);
        yield put({ 
            type: 'SET_CHARACTER',
            payload: response.data
        })

    }
    catch (error) {
        console.log('failed to fetch character', error);
    }
};

export default function* rootSaga() {
    yield all([
        sagaListeners()
    ]);
};
