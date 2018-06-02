import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import configureStore from './common/functions/configureStore';

import './common/globals';

import './styles/index.sass';
import './styles/Fonts.sass';

const store = configureStore();

let app = document.createElement('div');
app.setAttribute('id', 'app');
document.body.prepend(app);

ReactDOM.render (
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById('app')
);
