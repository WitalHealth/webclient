import  './sass/main.scss';

import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import store from './data/store';
import initReactFastclick from 'react-fastclick';
const history = createHistory();

import App from './ui/layouts/App';

initReactFastclick();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);