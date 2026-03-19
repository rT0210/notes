import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes, closeModal } from "../../store/slices/notesSlice";

const NoteModal = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleNewUser = () => {
    if(name === "") return
    const newUser = { id: Date.now(), title: name, description: "" };
    dispatch(addNotes(newUser));
    setName("");
  };

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  
  return (
    <div className="border w-50 h-50 absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button className="absolute text-3xl -top-4 right-0" onClick={handleCloseModal}>x</button>
      <input
        type="text"
        maxLength={10}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="введите название"
      />
      <button onClick={handleNewUser}>add</button>
    </div>
  );
};

export default NoteModal;
