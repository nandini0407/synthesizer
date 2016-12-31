import { connect } from 'react-redux';
import Synth from './synth';
import { keyReleased, keyPressed } from '../../actions/notes_actions';
import { addNotes } from '../../actions/tracks_actions';

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    isRecording: state.isRecording
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    keyPressed: (key) => dispatch(keyPressed(key)),
    keyReleased: (key) => dispatch(keyReleased(key)),
    addNotes: (notes) => dispatch(addNotes(notes))
  };
};

const SynthContainer = connect(mapStateToProps, mapDispatchToProps)(Synth);

export default SynthContainer;
