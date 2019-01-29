import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './main/store';
import './assets/style.css'

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <App />
        </Provider>
    </AppContainer>
    
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
