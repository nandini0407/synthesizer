import React from 'react';

const NoteKey = ({ key, note, pressed }) => {
  return (
    <div className={pressed? `note-key pressed` : `note-key`} key={key}>{note}</div>
  );
};

export default NoteKey;
