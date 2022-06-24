import { useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import { MdNotAccessible } from "react-icons/md";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: "This is my first note!", date: "24.06.2022" },
    { id: nanoid(), text: "This is my second note!", date: "25.06.2022" },
    { id: nanoid(), text: "This is my third note!", date: "26.06.2022" },
  ]);

  const addNote = (text) => {
    console.log("test text", text);

    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => id !== note.id);    
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search/>
      <NoteList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />

    </div>
  );
};

export default App;
