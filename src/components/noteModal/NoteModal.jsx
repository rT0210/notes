import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes, closeModal } from "../../store/slices/notesSlice";
import Button from "../button/Button";

const NoteModal = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  const handleNewUser = () => {
    if(name === "") return
    const newUser = { id: Date.now(), title: name, description: "" };
    dispatch(addNotes(newUser));
    setName("");
    handleCloseModal()
  };

  return (
    <div className="w-100 h-40 absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded gap-8 items-center p-4 bg-gray-600">
      <button className="absolute text-2xl -top-3 right-0 cursor-pointer" onClick={handleCloseModal}>x</button>
      <input className="border w-full text-black"
        type="text"
        maxLength={40}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="введите название"
      />
      <Button onClick={handleNewUser} width={10} height={40}>Add note</Button>
    </div>
  );
};

export default NoteModal;
