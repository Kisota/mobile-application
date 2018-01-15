// @flow

// Redux Store Configuration
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import loggingMiddleware from './middleware/log';

const configureStore = (initialState : Object) => {
  const middleware = applyMiddleware(loggingMiddleware);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
