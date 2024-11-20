import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote, deleteNote } from "./path/to/actions";


function App() {
  const [note, setNote] = useState('');
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (note.trim()) {
      dispatch(addNote(note.trim()));
      setNote('');
    }
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h1>React Redux Notes App</h1>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note"
      />
      <button onClick={handleAddNote}>Add Note</button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
