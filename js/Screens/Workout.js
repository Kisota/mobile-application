import React from 'react';

import {
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';

class WorkoutScreen extends React.Component<*> {
  render() {
    const { navigation } = this.props;

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
            Workout
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default WorkoutScreen;
