/* @flow */

import React from 'react';

import { Provider } from 'react-redux';
import { Text, AppState, AsyncStorage, View } from 'react-native';
import { Font, AppLoading } from 'expo';

import configureStore from './store/configureStore';
import { Root } from './routes';

const store = configureStore({});

// eslint-disable-next-line
class App extends React.Component {

  state = {
    isReady: false,
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

  load = () => {
    return Font.loadAsync({
      'Poiret One': require('../assets/fonts/PoiretOne-Regular.ttf'),
      OpenSans: require('../assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans Light': require('../assets/fonts/OpenSans-Light.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.load}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
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
