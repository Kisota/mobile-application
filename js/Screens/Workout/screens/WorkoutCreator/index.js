import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, List, FormInput } from 'react-native-elements';

import randomWord from 'random-words';
import { createWorkout } from '../../../../domains/workout/actions';
import EditableStep from './EditableStep';

class WorkoutCreatorScreen extends Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      step: '',
      workoutSteps: [],
      workoutName: '',
    };
  }

  addStep = () => {
    const nextStep = this.state.step;

    /* NOTE dev shortcut */
    if (process.env.NODE_ENV === 'development' && !nextStep) {
      this.setState({
        step: '',
        workoutSteps: [...this.state.workoutSteps, randomWord()],
      });
    }
    if (!nextStep) return;

    this.setState({
      step: '',
      workoutSteps: [...this.state.workoutSteps, nextStep],
    });
  }

  create = () => {
    /* NOTE dev shortcut */
    if (process.env.NODE_ENV === 'development' && !this.state.workoutName) {
      this.props.createWorkout({
        name: `test ${new Date()}`,
        steps: ['k', 'gro'],
      });
      return;
    }
    this.props.createWorkout({
      name: this.state.workoutName,
      steps: this.state.workoutSteps,
    });
    this.setState({
      workoutSteps: [],
      workoutName: '',
    });
  }

  deleteStep = (index) => {
    const copy = this.state.workoutSteps.slice();
    copy.splice(index, 1);
    this.setState({
      workoutSteps: copy,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
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
              {'WORKOUT CREATOR'}
            </Text>
          </View>
          <View style={{ marginTop: '5%', marginBottom: '5%' }}>
            <FormInput
              placeholder="Name"
              onChangeText={text => this.setState({ workoutName: text })}
              value={this.state.workoutName}
            />
          </View>
          <View style={{ marginTop: '5%', marginBottom: '5%' }}>
            <FormInput
              placeholder="Type here to add your step!"
              onChangeText={step => this.setState({ step })}
              value={this.state.step}
            />
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Button
              raised
              icon={{ name: 'add' }}
              title="ADD"
              color="#FFFFFF"
              backgroundColor="#D81E5B"
              onPress={this.addStep}
            />
          </View>
          <List containerStyle={{ marginBottom: 20 }}>
            {this.state.workoutSteps.map((step, idx) => (
              <EditableStep
                key={step}
                step={step}
                onDelete={() => this.deleteStep(idx)}
              />
            ))}
          </List>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Button
              raised
              icon={{ name: 'done' }}
              title="CREATE"
              color="#FFFFFF"
              backgroundColor="#D81E5B"
              onPress={this.create}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  () => ({}),
  dispatch => bindActionCreators({
    createWorkout,
  }, dispatch),
)(WorkoutCreatorScreen);
