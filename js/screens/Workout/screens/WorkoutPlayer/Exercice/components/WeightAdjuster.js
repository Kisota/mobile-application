import React from 'react';
import T from 'prop-types';

import { View, Text, Picker, StyleSheet } from 'react-native';

import createArrayFromRange from '../../../../../../helpers/createArrayFromRange';

const styles = StyleSheet.create({
  explain: {
    fontFamily: 'OpenSans Light',
    textAlign: 'center',
  },
  container: {
    marginTop: 32,
  },
});

const WeightAdjuster = ({ weight, adjustWeight }) => (
  <View style={styles.container}>
    <Text style={styles.explain}>The weight you actually used</Text>
    <Picker
      selectedValue={weight}
      onValueChange={adjustWeight}
      style={{ height: 132 }}
      itemStyle={{ height: 132 }}
    >
      {
        createArrayFromRange(
          0,
          weight * 2 < 100 ? 100 : weight * 2,
          0.5,
        ).map(i => (
          <Picker.Item key={i} label={`${i} kg`} value={i} />
        ))
      }
    </Picker>
  </View>
);

WeightAdjuster.propTypes = {
  weight: T.number.isRequired,
  adjustWeight: T.func.isRequired,
};

WeightAdjuster.defaultProps = {};

export default WeightAdjuster;
