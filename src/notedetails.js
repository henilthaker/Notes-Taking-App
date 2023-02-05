import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetchNotes from "./useFetchNotes";
const NoteDetails = () => {
    const { id } = useParams();
    // const [note, setNote] = useState(null);
    const { notes: note, isPending, error } = useFetchNotes("http://localhost:8000/notes/" + id);

    return (
        <div className="noteDetails" >
            {note &&
                <div style={{ backgroundColor: note.color }}>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                </div>}
            
        </div>
    )
}
export default NoteDetails