import { connect } from 'react-redux';
import Recorder from './recorder';
import { startRecording, stopRecording, addNotes } from '../../actions/tracks_actions';

const mapStateToProps = ({ isRecording }) => {
  return {
    isRecording
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startRecording: () => dispatch(startRecording()),
    stopRecording: () => dispatch(stopRecording())
  };
};

const RecorderContainer = connect(mapStateToProps, mapDispatchToProps)(Recorder);

export default RecorderContainer;
