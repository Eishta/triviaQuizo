import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../reducers/quizReducer';
import thunkMiddleware from 'redux-thunk';
import logger  from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));