import React from 'react';
import T from 'prop-types';

import { ListItem } from 'react-native-elements';

const WorkoutItem = ({ data, onDelete, onPress }) => (
  <ListItem
    key={data.name}
    title={data.name}
    rightIcon={{ name: 'delete' }}
    onPressRightIcon={onDelete}
    titleNumberOfLines={10}
    onPress={onPress}
  />
);


WorkoutItem.propTypes = {
  data: T.object.isRequired,

  /* functions */
  onDelete: T.func.isRequired,
  onPress: T.func.isRequired,
};

WorkoutItem.defaultProps = {};

export default WorkoutItem;
