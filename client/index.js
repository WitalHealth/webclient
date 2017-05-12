import  './sass/main.scss';

// react
import React from 'react';
import {render} from 'react-dom';

// router
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// redux
import { Provider } from 'react-redux';
import store from './data/store';

// components
import App from './ui/layouts/App';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
);