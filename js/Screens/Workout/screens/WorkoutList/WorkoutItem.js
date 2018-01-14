import React from 'react';
import T from 'prop-types';

import { ListItem } from 'react-native-elements';

const WorkoutItem = ({ step, onDelete }) => (
  <ListItem
    key={step}
    title={step}
    rightIcon={{ name: 'delete' }}
    onPressRightIcon={onDelete}
    titleNumberOfLines={10}
  />
);


WorkoutItem.propTypes = {
  step: T.string.isRequired,
  onDelete: T.func.isRequired,
};

WorkoutItem.defaultProps = {};

export default WorkoutItem;
