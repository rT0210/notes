import { useDispatch, useSelector } from "react-redux"
import NoteItem from "../noteItem/NoteItem"
import { selectNote } from "../../store/slices/notesSlice"

const NoteList = () => {

    const dispatch = useDispatch()

    const allNotes = useSelector((state) => state.notes.notes)

    return (
        <div className="flex flex-col gap-4 p-4 border-r-2">
            {allNotes.map((note) => <NoteItem note={note} key={note.id} onClick={() => dispatch(selectNote(note))}/>)}
        </div>
    )
}
export default NoteList