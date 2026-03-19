import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  isModal: false,
  currentNote: null,
};

const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    addNotes(state, action) {
      state.notes.push(action.payload);
    },
    deleteNotes(state, action) {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    openModal(state) {
      state.isModal = true;
    },
    closeModal(state) {
      state.isModal = false;
    },
    selectNote(state, action) {
      state.currentNote = action.payload;
    },
    editName(state, action) {
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id,
      );
      state.notes[index].title = action.payload.title;
      if (state.currentNote?.id === action.payload.id) {
        state.currentNote.title = action.payload.title;
      }
    },
    editDescription(state, action) {
        const index = state.notes.findIndex((note) => note.id === action.payload.id)
        state.notes[index].description = action.payload.description
        if(state.currentNote?.id === action.payload.id) {
            state.currentNote.description = action.payload.description
        }
    }
  },
});

export default notesSlice.reducer;

export const {
  addNotes,
  deleteNotes,
  openModal,
  closeModal,
  selectNote,
  editName,
  editDescription
} = notesSlice.actions;
