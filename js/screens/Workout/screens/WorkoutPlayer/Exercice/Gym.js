import React from 'react';
import T from 'prop-types';

import { View, StyleSheet } from 'react-native';

import Header from './components/Header';
import RepAdjuster from './components/RepAdjuster';
import BottomButton from './components/BottomButton';
import AdvisedWeight from './components/AdvisedWeight';
import WeightAdjuster from './components/WeightAdjuster';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});

const GymExercice = ({
  label, reps, weight, usedWeight, adjustReps, goNext, adjustWeight,
}) => (
  <View style={styles.screenContainer}>
    {/* main header */}
    <Header label={label} />
    <View style={styles.content}>
      {/* rep adjuster */}
      <RepAdjuster
        reps={reps}
        adjustReps={adjustReps}
      />
      {/* the advised weight for this exercice */}
      <AdvisedWeight
        weight={weight}
        adjustWeight={adjustWeight}
      />
      <WeightAdjuster
        weight={usedWeight}
        adjustWeight={adjustWeight}
      />
    </View>
    {/* button to go the next screen */}
    <BottomButton label="I've done that!" onPress={goNext} icon="done" />
  </View>
);


GymExercice.propTypes = {
  /* data */
  label: T.string.isRequired,
  reps: T.number.isRequired,
  weight: T.number.isRequired,
  usedWeight: T.number.isRequired,

  /* functions */
  adjustReps: T.func.isRequired,
  adjustWeight: T.func.isRequired,
  goNext: T.func.isRequired,
};

GymExercice.defaultProps = {};

export default GymExercice;
