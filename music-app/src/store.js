import rootReducer from './reducers';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
