import React from 'react';
import { TONES, NOTE_NAMES } from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key';
import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((note) => new Note(TONES[note]));
  }

  onKeyDown(e) {
    e.preventDefault();
    if (this.props.isRecording) {
      this.addNotes(this.props.notes);
    }
    let key = e.key;
    this.props.keyPressed(key);
  }

  onKeyUp(e) {
    e.preventDefault();
    if (this.props.isRecording) {
      this.addNotes(this.props.notes);
    }
    let key = e.key;
    this.props.keyReleased(key);
  }

  componentDidMount() {
    $(document).on('keydown', (e) => this.onKeyDown(e));
    $(document).on('keyup', (e) => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  render() {
    this.playNotes();
    const allNotes = NOTE_NAMES.map((note, idx) => { return <NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)} />; } );
    return (
      <div className="synth">
        <h1 className="synth-title">Synthesizer</h1>
        <div className="all-note-keys">
          { allNotes }
        </div>
      </div>
    );
  }
}

export default Synth;
