// @flow
import uuidv4 from 'uuid/v4';
import filter from 'lodash/filter';

import {
  CREATE_WORKOUT,
  DELETE_WORKOUT,
} from './constants';

const initialState = {
  items: [
    {
      id: uuidv4(),
      name: 'example workout',
      steps: [
        'push-ups',
        'rest',
        'pull-ups',
      ],
    },
  ],
  isLoading: false,
  error: false,
};

export const getWeatherSelector = (state : Object) => ({ ...state.weather });

const workoutReducer = (state : Object = initialState, action : Object) => {
  switch (action.type) {
    case CREATE_WORKOUT: {
      return {
        ...state,
        isLoading: false,
        error: true,
        items: [
          ...state.items,
          {
            id: uuidv4(),
            ...action.payload,
          },
        ],
      };
    }
    case DELETE_WORKOUT: {
      return {
        ...state,
        isLoading: false,
        error: true,
        items: [
          ...filter(state.items, o => o.id !== action.payload.id),
        ],
      };
    }
    default: {
      return state;
    }
  }
};

export default workoutReducer;
