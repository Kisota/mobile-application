import React from 'react';
import T from 'prop-types';

import { View, Text, Picker, StyleSheet } from 'react-native';

import createArrayFromRange from '../../../../../../helpers/createArrayFromRange';

const OFFSET = 20;

const styles = StyleSheet.create({
  repAdjuster: {
    fontFamily: 'OpenSans Light',
    textAlign: 'center',
  },
  repAdjusterContainer: {
    marginTop: 32,
  },
});

const RepAdjuster = ({ reps, adjustReps }) => (
  <View style={styles.repAdjusterContainer}>
    <Text style={styles.repAdjuster}>If you fail, adjust the number of reps executed</Text>
    <Picker
      selectedValue={reps}
      onValueChange={adjustReps}
      style={{ height: 132 }}
      itemStyle={{ height: 132 }}
    >
      {
        createArrayFromRange(
          ((reps - OFFSET) < 0 ? 0 : (reps - OFFSET)),
          reps + OFFSET,
        ).map(i => (
          <Picker.Item key={i} label={`${i} reps`} value={i} />
        ))
      }
    </Picker>
  </View>
);

RepAdjuster.propTypes = {
  reps: T.number.isRequired,
  adjustReps: T.func.isRequired,
};

RepAdjuster.defaultProps = {};

export default RepAdjuster;
