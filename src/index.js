import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import myReducers from './redurces/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  myReducers,
  composeEnhancer(applyMiddleware(thunk)),
);

ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
