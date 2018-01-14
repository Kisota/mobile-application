/* @flow */

import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { Root } from './Routes';

const store = configureStore({});

// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
