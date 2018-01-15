// @flow
import { combineReducers } from 'redux';
import workouts from '../domains/workout/reducer';

// Root Reducer
const rootReducer = combineReducers({
  workouts,
});

export default rootReducer;
