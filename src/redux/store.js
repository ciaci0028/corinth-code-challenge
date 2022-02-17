import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './reducers/store.reducer';
import rootSaga from './sagas/root.saga';

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware to use
// I don't want a whole ton of console logs in the production code
const middlewareList = process.env.NODE_ENV === 'development' ?
    [sagaMiddleware, logger] :
    [sagaMiddleware];

// Creating a store. In theory, if I had more reducers I'd be able
// to organize them into different parts
const store = createStore(
    rootReducer,
    // adds all middleware to project including logger
    applyMiddleware(...middlewareList),
);

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;