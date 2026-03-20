import { useDispatch, useSelector } from "react-redux";
import NoteItem from "../noteItem/NoteItem";
import { openModal, selectNote } from "../../store/slices/notesSlice";
import Button from "../button/Button";

const NoteList = () => {
  const dispatch = useDispatch();

  const allNotes = useSelector((state) => state.notes.notes);

  return (
    <div className="flex flex-col gap-4 p-4 border-r-2">
      <div className="flex justify-around min-w-80">
        {allNotes.length > 0 ? (
          <h1 className="flex justify-center text-3xl text-black">
            total notes: {allNotes.length}
          </h1>
        ) : (
          <h1 className="text-3xl">no notes...</h1>
        )}
        <Button onClick={() => dispatch(openModal())}>showModal</Button>
      </div>

      {allNotes.map((note) => (
        <NoteItem
          note={note}
          key={note.id}
          onClick={() => dispatch(selectNote(note))}
        />
      ))}
    </div>
  );
};
export default NoteList;
