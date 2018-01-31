import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';
import { createWorkout } from '../../../../domains/workout/actions';

import WorkoutCreatorStepNameScreen from './StepWorkoutName';
import WorkoutCreatorStepStepsScreen from './StepWorkoutSteps';
import GymExerciceSearcher from './GymExerciceSearcher';

const steps = [
  GymExerciceSearcher,
  WorkoutCreatorStepStepsScreen,
  WorkoutCreatorStepNameScreen,
];

class WorkoutCreatorScreen extends Component<*> {
  state = {
    step: 0,
  };

  componentDidUpdate = () => {
    if (this.state.step >= steps.length) {
      this.create();
      const { navigation } = this.props;
      navigation.navigate('WorkoutList');
    }
  }

  onContinue = (props) => {
    if (this.state.step < steps.length) {
      this.setState({
        step: this.state.step + 1,
        ...props,
      });
    } else {
      this.create();
    }
  }

  create = () => {
    this.props.createWorkout({
      name: this.state.workoutName,
      steps: this.state.workoutSteps,
    });
  }

  render() {
    const CurrentScreen = steps[this.state.step];
    if (CurrentScreen) {
      return (
        <CurrentScreen
          {...this.props}
          onContinue={this.onContinue}
        />
      );
    }
    return (
      <View />
    );
  }
}

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    createWorkout,
  }, dispatch),
)(WorkoutCreatorScreen);
