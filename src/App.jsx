import { useDispatch, useSelector } from "react-redux";
import NoteList from "./components/noteList/NoteList";
import { addNotes,  selectNote } from "./store/slices/notesSlice";
import NoteModal from "./components/noteModal/NoteModal";
import NoteDetails from "./components/noteDetails/NoteDetails";
import { useEffect } from "react";
import { loadNotes, saveNotes } from "./utils/storage";

const App = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.notes.isModal);
  const notes = useSelector((state) => state.notes.notes);
  const user = useSelector((state) => state.notes.currentNote);

  useEffect(() => {
    const savedNotes = loadNotes();
    savedNotes.forEach((note) => {
      dispatch(addNotes(note));
    });
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  useEffect(() => {
    if (!user) return
    const isDeleted = notes.find((note) => note.id === user.id)
    if(!isDeleted) dispatch(selectNote(null))
  }, [notes])

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative bg-black gap-4">
      <div className="w-[80%] h-[80%] border-white bg-gray-500 rounded flex justify-between">
        <div className="overflow-y-auto">
          {isModalOpen && <NoteModal />}
          <NoteList />
        </div>
        <div>{user && <NoteDetails />}</div>
      </div>
    </div>
  );
};
export default App;
