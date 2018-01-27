import React from 'react';
import T from 'prop-types';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {},
});

const BottomButton = ({ label, onPress, icon }) => (
  <View style={styles.container}>
    <Button
      raised
      icon={{ name: icon }}
      title={label}
      color="#FFFFFF"
      backgroundColor="#D81E5B"
      onPress={onPress}
      containerViewStyle={{ width: '100%', marginLeft: 0 }}
    />
  </View>
);

BottomButton.propTypes = {
  /* data */
  label: T.string,
  icon: T.string,

  /* functions */
  onPress: T.func.isRequired,
};

BottomButton.defaultProps = {
  label: '',
  icon: null,
};

export default BottomButton;
