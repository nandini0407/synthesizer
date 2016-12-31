import { connect } from 'react-redux';
import Jukebox from './jukebox';
import { groupUpdate } from '../../actions/notes_actions';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks,
    isRecording: state.isRecording,
    isPlaying: state.isPlaying
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: (track) => (e) => {
      dispatch(startPlaying);
      let playBackStartTime = Date.now();
      let currNote = 0;
      let timeElaspsed;

      let interval;
      interval = setInterval(() => {
        if (currNote < track.roll.length) {
          timeElaspsed = Date.now() - playBackStartTime;

          if (timeElaspsed >= track.roll[currNote].timeSlice) {
            dispatch(groupUpdate(track.roll[currNote].notes));
            currNote++;
          }
        } else {
          clearInterval(interval);
          dispatch(stopPlaying());
        }
      }, 1);
    }
  };
};

const JukeboxContainer = connect(mapStateToProps, mapDispatchToProps)(Jukebox);

export default JukeboxContainer;
