import { Link } from 'react-router-dom';
import { useState } from 'react';
const SideBar = () => {
    const [buttonClass, setbuttonClass] = useState("button unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isClicked, setIsClicked] = useState(false)

    const updateClass = () => {
        if (!isClicked) {
            setIsClicked(true);
            setMenuClass("menu visible");
            setbuttonClass("button clicked")
        }
        else {
            setIsClicked(false);
            setMenuClass("menu hidden");
            setbuttonClass("button unclicked");
        }
    }
    return (
        <div className="sideBar">
            <Link to='/' id="my-notes">My Notes</Link>
            <div className={buttonClass} id="add" onClick={updateClass}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16" id="add">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </div>
            <ul className={menuClass}>
                <Link to={'/create/yellow'}><li style={{ color: 'yellow' }} onClick={updateClass}></li></Link>
                <Link to={'/create/coral'}><li style={{ color: 'coral' }} onClick={updateClass}></li></Link>
                <Link to={'/create/cyan'}><li style={{ color: 'cyan' }} onClick={updateClass}></li></Link>
                <Link to={'/create/cadetblue'}><li style={{ color: 'cadetblue' }} onClick={updateClass}></li></Link>
                <Link to={'/create/deepskyblue'}><li style={{ color: 'deepskyblue' }} onClick={updateClass}></li></Link>
                <Link to={'/create/aquamarine'}><li style={{ color: 'aquamarine' }} onClick={updateClass}></li></Link>

            </ul>
        </div>
    )
}
export default SideBar