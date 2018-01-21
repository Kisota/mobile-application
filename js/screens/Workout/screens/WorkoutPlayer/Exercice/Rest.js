import React, { Component } from 'react';
import T from 'prop-types';

import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const GET_DIFFERENCE_SECONDS = (t1, t2) => Math.floor(Math.abs((t1 - t2) / 1000));

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
      <View>
        <Text style={{ textAlign: 'center' }}>{label.toUpperCase()}</Text>
        <Text>
          {secondsLeft === null ? duration : secondsLeft } seconds left
        </Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Button
            raised
            icon={{ name: 'skip-next' }}
            title="SKIP"
            color="#FFFFFF"
            backgroundColor="#D81E5B"
            onPress={this.goNext}
          />
        </View>
      </View>
    );
  }
}


RestExercice.propTypes = {
  /* data */
  label: T.string.isRequired,
  duration: T.number.isRequired,

  /* functions */
  goNext: T.func.isRequired,
};

RestExercice.defaultProps = {};

export default RestExercice;
