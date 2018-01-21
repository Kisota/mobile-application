import React, { Component } from 'react';
import T from 'prop-types';

import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';

class WorkoutCreatorStepNameScreen extends Component<*> {
  state = {
    name: '',
    error: null,
  };

  continue = () => {
    if (this.state.name) {
      this.props.onContinue({ workoutName: this.state.name });
      return;
    }

    this.setState({ error: 'Please set a workout name' });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ marginTop: '5%', marginBottom: '5%' }}>
            <FormInput
              placeholder="Your workout name"
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            />
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Button
              raised
              icon={{ name: 'arrow-forward' }}
              title="NEXT"
              color="#FFFFFF"
              backgroundColor="#D81E5B"
              onPress={this.continue}
            />
          </View>
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <Text style={{ textAlign: 'center' }}>
              {this.state.error}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

WorkoutCreatorStepNameScreen.propTypes = {
  /* functions  */
  onContinue: T.func.isRequired,
};

export default WorkoutCreatorStepNameScreen;
