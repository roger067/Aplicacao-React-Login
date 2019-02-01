import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

//const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = [thunk, multi];
const store = createStore(reducers, applyMiddleware(...middlewares))

export default store;