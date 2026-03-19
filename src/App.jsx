import { useDispatch, useSelector } from "react-redux";
import NoteList from "./components/noteList/NoteList";
import { addNotes, openModal, selectNote } from "./store/slices/notesSlice";
import NoteModal from "./components/noteModal/NoteModal";
import NoteDetails from "./components/noteDetails/NoteDetails";
import { useEffect } from "react";
import { loadNotes, saveNotes } from "./utils/storage";

const App = () => {
  const dispatch = useDispatch();

  const isModalOpen = useSelector((state) => state.notes.isModal);
  const notes = useSelector(state => state.notes.notes)

  useEffect(() => {
    const savedNotes = loadNotes()
    savedNotes.forEach(note => {
      dispatch(addNotes(note))
    }) 
  }, [])

  useEffect(() => {
    saveNotes(notes)
  }, notes)

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col relative border">
      <button onClick={() => dispatch(openModal())}>showModal</button>
      <div className="w-[80%] h-[80%] border  flex justify-between">
        <div className="overflow-y-auto">
        {isModalOpen && <NoteModal />}
        <NoteList />
      </div>
      <div>
        {selectNote && <NoteDetails />}
      </div>
      </div>
      
    </div>
  );
};
export default App;
