import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import admin from './reducers/adminReduser';
import posts from './reducers/postsReduser';
import pages from './reducers/pagesReduser';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {routerReducer} from 'react-router-redux';

export default createStore(combineReducers({admin, posts, pages, routing:routerReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(logger, thunk, promise()));