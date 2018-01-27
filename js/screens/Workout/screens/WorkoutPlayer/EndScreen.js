import React, { Component } from 'react';
import T from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const GET_DIFFERENCE_MS = (t1, t2) => Math.floor(Math.abs((t1 - t2)));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#08415c',
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    fontFamily: 'Poiret One',
    textAlign: 'center',
    color: '#eee5e9',
    fontSize: 64,
  },
});

class EndScreen extends Component<*> {
  state = {
    startTimestamp: new Date(),
    interval: setInterval(this.updateTimer.bind(this), 1500),
  }

  updateTimer() {
    const { end } = this.props;
    const diff = GET_DIFFERENCE_MS(new Date(), this.state.startTimestamp);

    if (diff > 1) {
      clearInterval(this.state.interval);
      if (end) end();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Good Job!
        </Text>
      </View>
    );
  }
}

EndScreen.propTypes = {
  /* functions */
  end: T.func.isRequired,
};

EndScreen.defaultProps = {};

export default EndScreen;
