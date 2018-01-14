import React, { Component } from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  Text,
} from 'react-native';

import { Button } from 'react-native-elements';


class WorkoutViewerScreen extends Component<*> {
  start = () => {

  }

  render() {
    const { workout } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: 'red',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
            }}
          >
            {workout.name.toUpperCase()}
          </Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Button
            raised
            icon={{ name: 'add' }}
            title="START"
            color="#FFFFFF"
            backgroundColor="#D81E5B"
            onPress={this.start}
          />
        </View>
      </View>
    );
  }
}

WorkoutViewerScreen.propTypes = {
  workout: T.object.isRequired,
};

WorkoutViewerScreen.defaultProps = {
  workout: {},
};

export default connect(
  (state, props) => ({
    workout: state.workouts.items.find(o => o.id === props.navigation.state.params.id),
  }),
  null,
)(WorkoutViewerScreen);
