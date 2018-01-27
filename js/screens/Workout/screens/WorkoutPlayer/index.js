import React, { Component } from 'react';
import T from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  StatusBar,
} from 'react-native';

import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import {
  GymExercice,
  RestExercice,
} from './Exercice';
import EndScreen from './EndScreen';

class WorkoutPlayerScreen extends Component<*> {
  state = {
    started: false,
    ended: false,
    steps: [],
  }

  componentDidMount() {
    this.init(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.init(nextProps);
  }

  getCurrentStep = () => this.state.steps[this.state.currentStep] || null;

  gymAdjustReps = (value) => {
    const steps = this.state.steps.slice();

    steps[this.state.currentStep].metadata.reps = value;
    this.setState({ steps });
  }

  gymAdjustWeight = (value) => {
    const steps = this.state.steps.slice();

    steps[this.state.currentStep].metadata.usedWeight = value;
    this.setState({ steps });
  }

  init = (props) => {
    const workout = get(props, 'workout');
    if (this.state.started) return;
    if (isEmpty(workout)) return;

    this.setState({
      started: true,
      ended: false,
      steps: get(workout, 'steps'),
      currentStep: 0,
    });
  }

  goNext = () => {
    if (this.state.currentStep + 1 >= this.state.steps.length) {
      this.setState({ ended: true, started: false });
      return;
    }
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  end = () => {
    const { navigation } = this.props;
    navigation.navigate('WorkoutList');
  }

  renderCurrentStep = () => {
    const currentStep = this.getCurrentStep();

    if (isEmpty(currentStep)) return null;

    if (currentStep.type === 'GYM') {
      return (
        <GymExercice
          label={get(currentStep, 'label')}
          reps={get(currentStep, 'metadata.reps')}
          weight={get(currentStep, 'metadata.weight', 5)}

          adjustReps={this.gymAdjustReps}
          adjustWeight={this.gymAdjustWeight}
          usedWeight={get(currentStep, 'metadata.usedWeight', 5)}

          goNext={this.goNext}
        />
      );
    }
    if (currentStep.type === 'REST') {
      return (
        <RestExercice
          label={get(currentStep, 'label')}
          duration={get(currentStep, 'metadata.duration')}
          goNext={this.goNext}
        />
      );
    }

    return null;
  }

  render() {
    console.log('this.state', this.state);

    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        {this.state.ended && <EndScreen end={this.end} />}
        {this.state.started &&
          !this.state.ended &&
          this.renderCurrentStep()
        }
      </View>
    );
  }
}

WorkoutPlayerScreen.propTypes = {
  workout: T.object.isRequired,
  navigation: T.object.isRequired,
};

WorkoutPlayerScreen.defaultProps = {
  workout: {},
};

export default connect(
  (state, props) => ({
    workout: state.workouts.items.find(o => o.id === props.navigation.state.params.id),
  }),
  null,
)(WorkoutPlayerScreen);
