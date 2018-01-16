import {
  CREATE_WORKOUT,
  DELETE_WORKOUT,
} from './constants';


export function createWorkout(payload) {
  return {
    type: CREATE_WORKOUT,
    payload,
  };
}

export function deleteWorkout(payload) {
  return {
    type: DELETE_WORKOUT,
    payload,
  };
}
