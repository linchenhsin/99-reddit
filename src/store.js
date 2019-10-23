// @flow

import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// apply router middleware
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    thunk,
  )
);

const store = createStore(
  reducers,
  {},
  enhancers
);
export default store;
