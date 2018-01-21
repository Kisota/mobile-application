import React from 'react';
import T from 'prop-types';

import { View, Text, Picker } from 'react-native';
import { Button } from 'react-native-elements';

import createArrayFromRange from '../../../../../helpers/createArrayFromRange';

const OFFSET = 20;

const GymExercice = ({
  label, reps, adjustReps, goNext,
}) => (
  <View>
    <Text style={{ textAlign: 'center' }}>{label.toUpperCase()}</Text>
    <Picker
      selectedValue={reps}
      onValueChange={adjustReps}
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
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Button
        raised
        icon={{ name: 'done' }}
        title="I'VE DONE THAT"
        color="#FFFFFF"
        backgroundColor="#D81E5B"
        onPress={goNext}
      />
    </View>
  </View>
);


GymExercice.propTypes = {
  /* data */
  label: T.string.isRequired,
  reps: T.number.isRequired,

  /* functions */
  adjustReps: T.func.isRequired,
  goNext: T.func.isRequired,
};

GymExercice.defaultProps = {};

export default GymExercice;
