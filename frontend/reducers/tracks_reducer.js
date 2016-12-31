import { START_RECORDING, STOP_RECORDING, ADD_NOTES } from '../actions/tracks_actions';
import { merge } from 'lodash';

let currTrackId = 0;

const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_RECORDING:
      currTrackId++;
      let track = {
        id: currTrackId,
        name: `Track ${currTrackId}`,
        roll: [],
        timeStart: action.timeNow
      };
      let nextState1 = merge(track, state);
      return nextState1;
    case STOP_RECORDING:
      merge({}, state, {
        roll: [
          ...state.roll,
          {
            notes: [],
            timeSlice: action.timeNow - state[currTrackId].timeStart
          }
        ]
      });
    case ADD_NOTES:
      let newRoll = {
        roll: [
          ...state.roll,
          {
            notes: action.notes,
            timeSlice: action.timeNow - state[currTrackId].timeStart
          }
        ]
      };
      return merge({}, state, newRoll);
    default:
      return state;
  }
};

export default tracksReducer;
