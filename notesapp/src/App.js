import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import { MdNotAccessible } from "react-icons/md";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-note-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-note-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}></Header>
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
