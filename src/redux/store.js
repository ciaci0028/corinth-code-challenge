import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers/store.reducer'; // imports ./redux/reducers/index.js

// Creating a store. In theory, if I had more reducers I'd be able
// to organize them into different parts
const store = createStore(
    rootReducer,
    // adds all middleware to project including logger
    applyMiddleware(...middlewareList),
);


export default store;