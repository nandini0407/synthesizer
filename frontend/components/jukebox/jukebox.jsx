import React from 'react';
import Track from './track';

const Jukebox = ({ tracks, isRecording, isPlaying, onPlay }) => {
  let allTracks = Object.keys(tracks).map((id) => {
    return <Track
      key={id}
      track={tracks[id]}
      disabled={isRecording || isPlaying}
      onPlay={onPlay(tracks[id])} />; });
  return (
    <div className="jukebox">
      <div className="jukebox-title">
        Jukebox
      </div>
      <div>
        { allTracks }
      </div>
    </div>
  );
};

export default Jukebox;
