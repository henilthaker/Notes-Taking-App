import { useState, useEffect } from "react"
const useFetchNotes = (url) => {
    const [notes, setNotes] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then((res) => {
        if (res.ok)
            setIsPending(false)
        return res.json();
    }).then((data) => {
        setNotes(data);
    }).catch((error) => {
        setError(error.message);
    })
}, [url]);
return { notes, isPending, error };
}
export default useFetchNotes
