import React, { Component } from 'react';

import {
  ScrollView,
  Text,
  StatusBar,
  View,

  TextInput,
  Button,
} from 'react-native';
import { List } from 'react-native-elements';

import EditableStep from './EditableStep';

class WorkoutScreen extends Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      workoutSteps: [],
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
        <StatusBar />
        <ScrollView style={{ flex: 1 }}>
          <Text
            style={{
              backgroundColor: '#00FF00',
              marginTop: '10%',
            }}
          >
            Workout Creator
          </Text>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            placeholder="Type here to add your step!"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <Button
            onPress={this.addStep}
            title="ADD"
            color="#D81E5B"
            accessibilityLabel="Add a step to the workout"
          />
          <List containerStyle={{ marginBottom: 20 }}>
            {this.state.workoutSteps.map((step, idx) => (
              <EditableStep
                key={step}
                step={step}
                onDelete={() => this.deleteStep(idx)}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default WorkoutScreen;
