import React from 'react';
import T from 'prop-types';

import { ListItem } from 'react-native-elements';

const EditableStep = ({ step, onDelete }) => (
  <ListItem
    key={step}
    title={step}
    rightIcon={{ name: 'delete' }}
    onPressRightIcon={onDelete}
    titleNumberOfLines={10}
  />
);


EditableStep.propTypes = {
  step: T.string.isRequired,
  onDelete: T.func.isRequired,
};

EditableStep.defaultProps = {};

export default EditableStep;
