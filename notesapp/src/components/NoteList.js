import React from "react";
import Note from "./Note";
const NoteList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, i) => (
        <Note key={i} text={note.text} date={note.date}/>
      ))}
    </div>
  );
};

export default NoteList;
