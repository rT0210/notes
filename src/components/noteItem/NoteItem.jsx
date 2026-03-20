import { useDispatch } from "react-redux";
import { deleteNotes } from "../../store/slices/notesSlice";
import Button from "../button/Button";

const NoteItem = ({ note, onClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-120 h-20 border flex justify-between items-center px-2 rounded bg-mauve-700">
      <p className="cursor-pointer text-black" onClick={onClick}>
        {note.title}
      </p>
      <Button onClick={() => dispatch(deleteNotes(note.id))}>delete note</Button>
    </div>
  );
};

export default NoteItem;
