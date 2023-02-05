import { Link } from 'react-router-dom';
import useFetchNotes from './useFetchNotes';
import { useHistory } from 'react-router-dom';
const NoteList = ({ notes }) => {
    const history = useHistory();
    const handleDelete = (id) => {
        fetch('http://localhost:8000/notes/' + id, {
            method: 'DELETE'
        })
        .then(()=>{
            window.location.reload(false);
        })
    }
    return (
        <div className="noteList">
            {notes.map((note) => {
                return (
                    <div className="note-preview" key={note.id} style={{backgroundColor:note.color}}>
                        <Link to={`notes/${note.id}`}>
                        <h3>{note.title}</h3>
                        <p>{note.body}</p>
                        </Link>
                        <button id="delete-button" onClick={() => {
                            handleDelete(note.id);
                        }}><i className="fa fa-trash"></i></button>
                    </div>
                )
            })}
        </div>
    )
}
export default NoteList;