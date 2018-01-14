import React, { Component } from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { List, Button } from 'react-native-elements';

import WorkoutStep from './WorkoutStep';

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

        <ScrollView style={{ flex: 1 }}>
          <List containerStyle={{ marginBottom: 20 }}>
            {workout.steps.map((step, index) => (
              <WorkoutStep
                key={`${step}-${index}`}
                data={step}
              />
            ))}
          </List>
        </ScrollView>

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
