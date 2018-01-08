import React from 'react';

import {
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

class HomeScreen extends React.Component<*> {
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
            Home
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
