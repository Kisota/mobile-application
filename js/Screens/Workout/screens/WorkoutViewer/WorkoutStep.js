import React from 'react';
import T from 'prop-types';

import { ListItem } from 'react-native-elements';

const WorkoutStep = ({ data }) => (
  <ListItem
    key={data}
    title={data.label}
    subtitle={data.metadata.reps ? `${data.metadata.reps} reps` : null}
    rightIcon={{ name: 'delete' }}
    titleNumberOfLines={10}
  />);


WorkoutStep.propTypes = {
  data: T.object.isRequired,
};

WorkoutStep.defaultProps = {};

export default WorkoutStep;
