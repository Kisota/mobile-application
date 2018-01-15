import React from 'react';
import T from 'prop-types';

import { ListItem } from 'react-native-elements';

const WorkoutStep = ({ data }) => (
  <ListItem
    title={data}
    hideChevron
  />
);


WorkoutStep.propTypes = {
  data: T.string.isRequired,
};

WorkoutStep.defaultProps = {};

export default WorkoutStep;
