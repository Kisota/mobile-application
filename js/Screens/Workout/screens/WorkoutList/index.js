import React, { Component } from 'react';

import {
  ScrollView,
  View,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button, List } from 'react-native-elements';

import WorkoutItem from './WorkoutItem';

class WorkoutListScreen extends Component<*> {
  state = {
    workouts: [],
  }

  create = () => {
    const { navigation } = this.props;

    navigation.navigate('WorkoutCreator');
  }

  view = (index) => {
    if (this.navigator) {
      this.navigator.dispatch(NavigationActions.navigate({ routeName: `/workouts/view/${index}` }));
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
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
            {this.state.workouts.map((step, index) => (
              <WorkoutItem
                key={step}
                step={step}
                onDelete={() => this.delete(index)}
                onClick={() => this.view(index)}
              />
            ))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

export default WorkoutListScreen;
