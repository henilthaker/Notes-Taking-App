import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './modal.js';
const SideBar = () => {
    const [buttonClass, setbuttonClass] = useState("button unclicked");
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isClicked, setIsClicked] = useState(false)
    const [modal, setModal] = useState(false);
    const [bgcolor, setBgcolor] = useState('white');
    const toggleModal = () => {
        setModal(!modal);
    }
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
    const handleClickOnColors = (color) => {
        updateClass();
        setBgcolor(color);
        toggleModal();
    }
    let overlay = document.getElementsByClassName('overlay');
    let create = document.getElementsByClassName('modal');
    overlay.onClick=(e)=>{
        if(e.target!=create)
            toggleModal();
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
                <div><li style={{ color: 'yellow' }} onClick={() => { handleClickOnColors('yellow') }}> </li></div>
                <div> <li style={{ color: 'coral' }} onClick={() => { handleClickOnColors('coral') }}> </li></div>
                <div><li style={{ color: 'cyan' }} onClick={() => { handleClickOnColors('cyan') }}> </li></div>
                <div><li style={{ color: 'cadetblue' }} onClick={() => { handleClickOnColors('cadetblue') }}> </li></div>
                <div><li style={{ color: 'deepskyblue' }} onClick={() => { handleClickOnColors('deepskyblue') }}> </li></div>
                <div><li style={{ color: 'aquamarine' }} onClick={() => { handleClickOnColors('aquamarine') }}> </li></div>
            </ul>
            {modal && <div className="overlay" onClick={toggleModal}>
            <Modal color={bgcolor}/>
            </div>}
        </div>
    )
}
export default SideBar