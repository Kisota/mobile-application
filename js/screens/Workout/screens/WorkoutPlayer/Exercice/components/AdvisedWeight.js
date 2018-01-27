import React from 'react';
import T from 'prop-types';

import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  weight: {
    fontFamily: 'Poiret One',
    textAlign: 'center',
    color: '#eee5e9',
    backgroundColor: '#08415c',
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 28,
    fontWeight: 'bold',
  },
  explain: {
    fontFamily: 'OpenSans Light',
    textAlign: 'center',
  },
});

const AdvisedWeight = ({ weight }) => (
  <View style={styles.header}>
    <Text style={styles.explain}>Advised weight:</Text>
    <Text style={styles.weight}>{weight}kg</Text>
  </View>
);

AdvisedWeight.propTypes = {
  weight: T.number,
};

AdvisedWeight.defaultProps = {
  weight: 42,
};

export default AdvisedWeight;
