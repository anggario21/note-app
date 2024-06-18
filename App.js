import React, { useState } from "react";
import Home from "./screens/home";
import AddNote from "./screens/addNote";
import EditNote from "./screens/editNote";

const CurrentPageWidget = ({ currentPage, noteList, setCurrentPage, addNote, editNote, deleteNote, currentNote, setCurrentNote }) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} deleteNote={deleteNote} setCurrentNote={setCurrentNote} />;
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return <EditNote item={currentNote} setCurrentPage={setCurrentPage} editNote={editNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const [currentNote, setCurrentNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (noteId, newTitle, newDesc) => {
    const updatedNoteList = noteList.map((note) => (note.id == noteId ? { ...note, title: newTitle, desc: newDesc } : note));

    setNoteList(updatedNoteList);
  };

  const deleteNote = (noteId) => {
    const updatedNoteList = noteList.filter((note) => note.id !== noteId);

    setNoteList(updatedNoteList);
  };

  return <CurrentPageWidget currentPage={currentPage} setCurrentPage={setCurrentPage} noteList={noteList} addNote={addNote} editNote={editNote} deleteNote={deleteNote} currentNote={currentNote} setCurrentNote={setCurrentNote} />;
};

export default App;
