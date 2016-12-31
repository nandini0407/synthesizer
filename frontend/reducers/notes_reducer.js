import { keyPressed, keyReleased, KEY_PRESSED, KEY_RELEASED, GROUP_UPDATE } from '../actions/notes_actions';
import { NOTE_NAMES } from '../util/tones';
import { merge } from 'lodash';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  const validNote = NOTE_NAMES.includes(action.key);
  const i = state.indexOf(action.key);

  switch (action.type) {
    case KEY_PRESSED:
      if (validNote && i === -1) {
        return [...state, action.key];
      }
      return state;
    case KEY_RELEASED:
      if (validNote && i !== -1) {
        return [...state.slice(0, i), ...state.slice(i + 1)];
      }
      return state;
    case GROUP_UPDATE:
      return [...action.notes];
    default:
      return state;
  }
};

export default notesReducer;
