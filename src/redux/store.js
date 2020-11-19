import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];//keep in mind this configuration can be viewed on redux documentation as well

const store = createStore (rootReducer, applyMiddleware(...middlewares))

// or const store = createStore (rootReducer, applyMiddleware(logger))

export default store;

