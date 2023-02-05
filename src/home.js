import { useState, useEffect } from "react";
import NoteList from './notelist.js'
import useFetchNotes from "./useFetchNotes.js";
const Home = () => {
    const { notes, isPending, error } = useFetchNotes('http://localhost:8000/notes')
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {notes && <NoteList notes={notes} />}
        </div>
    )
}
export default Home