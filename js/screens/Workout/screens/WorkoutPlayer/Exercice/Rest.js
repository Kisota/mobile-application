import React, { Component } from 'react';
import T from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';
import BottomButton from '../../../../../components/BottomButton';

const GET_DIFFERENCE_SECONDS = (t1, t2) => Math.floor(Math.abs((t1 - t2) / 1000));

const styles = StyleSheet.create({
  secondsLeft: {
    fontSize: 64,
    textAlign: 'center',
    color: '#424242',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

class RestExercice extends Component<*> {
  state = {
    startTimestamp: new Date(),
    interval: setInterval(this.updateTimer.bind(this), 1000),
    secondsLeft: null,
  }

  updateTimer() {
    const { duration, goNext } = this.props;
    const diff = GET_DIFFERENCE_SECONDS(new Date(), this.state.startTimestamp);

    this.setState({ secondsLeft: duration - diff });

    if (duration - diff < 0) {
      clearInterval(this.state.interval);
      goNext();
    }
  }

  goNext = () => {
    const { goNext } = this.props;

    clearInterval(this.state.interval);
    goNext();
  }

  render() {
    const { label, duration } = this.props;
    const { secondsLeft } = this.state;

    return (
      <View style={styles.screenContainer}>
        <Header label={label} />
        <View style={styles.content}>
          <Text style={styles.secondsLeft}>
            {secondsLeft === null ? duration : secondsLeft } seconds
          </Text>
        </View>
        <BottomButton
          icon="skip-next"
          label="Skip!"
          onPress={this.goNext}
        />
      </View>
    );
  }
}

RestExercice.propTypes = {
  /* data */
  label: T.string,
  duration: T.number.isRequired,

  /* functions */
  goNext: T.func.isRequired,
};

RestExercice.defaultProps = {
  label: 'Rest',
};

export default RestExercice;
