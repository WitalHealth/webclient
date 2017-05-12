import { composeWithDevTools } from 'redux-devtools-extension';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import thunk from 'redux-thunk'; // async actions
import * as reducers from './reducers';

const combinedReducers = combineReducers({
  ...reducers,
  routing: routerReducer,
});

const store = createStore(combinedReducers, {}, composeWithDevTools(
  applyMiddleware(routerMiddleware(history), thunk),
));

export default store;