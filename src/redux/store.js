import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];//keep in mind this configuration can be viewed on redux documentation as well

export const store = createStore (rootReducer, applyMiddleware(...middlewares));

// or const store = createStore (rootReducer, applyMiddleware(logger))
export const persistor = persistStore(store);

export default { store, persistor };

