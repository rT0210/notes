import { useDispatch, useSelector } from "react-redux";
import { editDescription, editName } from "../../store/slices/notesSlice";

const NoteDetails = () => {
  const user = useSelector((state) => state.notes.currentNote);

  const dispatch = useDispatch();

  return (
    <div className="w-160 p-4">
      {user && (
        <div className="flex flex-col gap-4 text-black">
          <input
            className="text-center text-3xl"
            value={user.title}
            onChange={(e) =>
              dispatch(editName({ ...user, title: e.target.value }))
            }
          ></input>
          <div className="flex justify-center bg-mauve-700">
            <textarea
              className="max-h-full w-full resize-none overflow-y-hidden text-left py-2 text-black p-2"
              rows={20}
              type="text"
              value={user.description}
              onChange={(e) =>
                dispatch(
                  editDescription({ ...user, description: e.target.value }),
                )
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NoteDetails;
