import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';

import {
  ScrollView,
  View,
  Picker,
  StyleSheet,
} from 'react-native';
import { Button, List, FormInput } from 'react-native-elements';

import randomWord from 'random-words';

import EditableStep from './EditableStep';
import createArrayFromRange from '../../../../helpers/createArrayFromRange';
import BottomButton from '../../../../components/BottomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  stepInputContainer: {
    padding: 7,
  },
  addStepButtonContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


class GymExerciceSearcher extends Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }

  search = (searchInput) => {
    console.log('searching', searchInput);
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepInputContainer}>
          <FormInput
            placeholder="Step name (ex: push-ups)"
            onChangeText={this.search}
          />
        </View>
        <ScrollView style={{ flex: 10 }}>
          <List containerStyle={{ marginBottom: 20 }}>
            {this.state.results.map(step => (
              <EditableStep
                key={step.id}
                step={step}
              />
            ))}
          </List>
        </ScrollView>
        {/* button to go the next screen */}
        <BottomButton label="validate" onPress={this.continue} icon="done" />
      </View>
    );
  }
}

export default GymExerciceSearcher;
