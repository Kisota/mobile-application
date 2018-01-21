/* @flow */

import React from 'react';

import { Provider } from 'react-redux';
import { Text, AppState, AsyncStorage, View } from 'react-native';
import configureStore from './store/configureStore';
import { Root } from './Routes';

const store = configureStore({});

// eslint-disable-next-line
class App extends React.Component {

  state = {
    isStoreLoading: false,
    store,
  }

  componentWillMount() {
    const self = this;

    AppState.addEventListener('change', this.handleAppStateChange.bind(this));
    this.setState({ isStoreLoading: true });
    // AsyncStorage.clear();
    AsyncStorage.getItem('completeStore').then((value) => {
      if (value && value.length) {
        const initialStore = JSON.parse(value);
        self.setState({ store: configureStore(initialStore) });
      } else {
        self.setState({ store: configureStore({}) });
      }
      self.setState({ isStoreLoading: false });
    }).catch(() => {
      self.setState({ store });
      self.setState({ isStoreLoading: false });
    });
  }

  handleAppStateChange() {
    const storingValue = JSON.stringify(this.state.store.getState());
    AsyncStorage.setItem('completeStore', storingValue);
  }

  render() {
    if (this.state.isStoreLoading) {
      return (
        <View style={{ flex: 1 }}>
          <Text>Loading Store ...</Text>
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
