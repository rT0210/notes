import { useDispatch } from "react-redux";
import { deleteNotes } from "../../store/slices/notesSlice";

const NoteItem = ({ note, onClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-120 h-20 border flex justify-between items-center px-2">
      <p className="cursor-pointer" onClick={onClick}>
        {note.title}
      </p>
      <div className="flex gap-2">
        <button
          className="border h-[50%]"
          onClick={() => dispatch(deleteNotes(note.id))}
        >
          удалить
        </button>
        <button className="border h-[50%]">Редактировать</button>
      </div>
    </div>
  );
};

export default NoteItem;
