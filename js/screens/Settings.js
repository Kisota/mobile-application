import React from 'react';

import {
  ScrollView,
  Text,
  StatusBar,
  View,
} from 'react-native';

class SettingsScreen extends React.Component<*> {
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
            Settings
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default SettingsScreen;
