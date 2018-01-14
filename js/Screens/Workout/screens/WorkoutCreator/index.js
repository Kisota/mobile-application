import React, { Component } from 'react';

import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, List, FormInput } from 'react-native-elements';


import { createWorkout } from '../../../../domains/workout/actions';
import EditableStep from './EditableStep';

class WorkoutCreatorScreen extends Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      workoutSteps: [],
      workouts: [],
      workoutName: '',
    };
  }

  addStep = () => {
    const nextState = this.state.text;
    if (!nextState) return;

    this.setState({
      text: '',
      workoutSteps: [...this.state.workoutSteps, nextState],
    });
  }

  create = () => {
    this.setState({
      workouts: [...this.state.workouts, this.state.workoutSteps],
      workoutSteps: [],
      workoutName: '',
    });
    this.props.createWorkout({
      name: 'test',
      steps: ['k', 'gro'],
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
              backgroundColor: '#F0544F',
              paddingTop: '10%',
              paddingBottom: '5%',
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              Workout Creator
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
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
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
