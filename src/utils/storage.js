export const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes))
}

export const loadNotes = () => {
    const saved = localStorage.getItem("notes")
    if(saved) {
        return JSON.parse(saved)
    }
    return []
}