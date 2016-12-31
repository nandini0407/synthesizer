import React from 'react';

const Track = ({ key, track, disabled, onPlay }) => {
  return (
    <div className="track" key={key}>
      <div className="track-title">
        {track.name}
      </div>
      <button
        className="play-button">
        disabled={disabled}
        onClick={onPlay}
        Play
      </button>
    </div>
  );
};

export default Track;
