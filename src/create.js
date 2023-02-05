import { useState } from "react"
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // const [color, setColor]=useState('');
    const { color } = useParams();
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
                history.push('/');
            });
    }
    return (
        <div className="create">
            <h2 style={{backgroundColor:color}}>Add a note</h2>
            <form action="">
                <div className="title">
                    <label>Title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)
                    } />
                </div>
                <div className="body">
                    <label>Body</label>
                    <textarea cols="30" rows="5" required value={body} onChange={(e) => setBody(e.target.value)
                    } />
                </div>
                {/* <div className="color">
                <label>Color</label>
                <input type="text" required value={color} onChange={(e) =>    setColor(e.target.value)
                } />
                </div> */}
                <button onClick={handleSubmit}>Add</button>
            </form>
        </div>
    )
}
export default Create