import React, { Component } from 'react';
import T from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import { Button, List } from 'react-native-elements';

import { deleteWorkout } from '../../../../domains/workout/actions';
import WorkoutItem from './WorkoutItem';

class WorkoutListScreen extends Component<*> {
  create = () => {
    const { navigation } = this.props;
    navigation.navigate('WorkoutCreator');
  }

  view = (id) => {
    const { navigation } = this.props;
    navigation.navigate('WorkoutViewer', { id });
  }

  delete = id => this.props.deleteWorkout({ id });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Button
            raised
            icon={{ name: 'add' }}
            title="CREATE"
            color="#FFFFFF"
            backgroundColor="#D81E5B"
            onPress={this.create}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <List containerStyle={{ marginBottom: 20 }}>
            {this.props.workouts.map(workout => (
              <WorkoutItem
                key={workout.id}
                data={workout}
                onPress={() => this.view(workout.id)}
                onDelete={() => this.delete(workout.id)}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

WorkoutListScreen.propTypes = {
  workouts: T.array.isRequired,
  navigation: T.object.isRequired,

  /* functions */
  deleteWorkout: T.func.isRequired,
};

WorkoutListScreen.defaultProps = {
  workouts: [],
};

export default connect(
  state => ({
    workouts: state.workouts.items,
  }),
  dispatch => bindActionCreators({
    deleteWorkout,
  }, dispatch),
)(WorkoutListScreen);
