import { useState } from "react";
import {nanoid} from "nanoid"
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([
    { id:nanoid(),
      text: "This is my first note!",
      date: "24.06.2022",
    },
    { id:nanoid(),
      text: "This is my second note!",
      date: "25.06.2022",
    },
    { id:nanoid(),
      text: "This is my third note!",
      date: "26.06.2022",
    },

  ]);

  return (
    <div className="container">
      <NoteList notes={notes}/>
    </div>
  );
};

export default App;
