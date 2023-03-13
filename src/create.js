import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Create = ({color}) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [color, setColor]=useState('');
    const [isPending, setIsPending] = useState(false);
    const note = { title, body, color }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);
        fetch('http://localhost:8000/notes', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(note)
        })
            .then((res) => {
                setIsPending(false);
                // history.push('/');
                window.location.reload(false);
            });
    }
    return (
        <div className="create" style={{backgroundColor:color}}>
            <h2>Add a note</h2>
            <form action="">
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)
                    } placeholder="title" style={{backgroundColor:color}}/>
                    <textarea cols="30" rows="5" required value={body} onChange={(e) => setBody(e.target.value)
                    } placeholder="body" style={{backgroundColor:color}}/>
                <button onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}
export default Create