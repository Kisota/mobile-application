import React, { Component } from 'react';
import T from 'prop-types';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button, FormInput } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainer: {
    paddingLeft: '5%',
    paddingRight: '5%',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  error: {
    marginTop: 20,
    marginBottom: 20,
  },
});

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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <FormInput
            placeholder="Your workout name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            raised
            icon={{ name: 'arrow-forward' }}
            title="CHOOSE THIS NAME"
            color="#FFFFFF"
            backgroundColor="#D81E5B"
            onPress={this.continue}
            containerViewStyle={{ width: '100%', marginLeft: 0 }}
          />
          <View style={styles.error}>
            <Text style={{ textAlign: 'center' }}>
              {this.state.error}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

WorkoutCreatorStepNameScreen.propTypes = {
  /* functions  */
  onContinue: T.func.isRequired,
};

export default WorkoutCreatorStepNameScreen;
