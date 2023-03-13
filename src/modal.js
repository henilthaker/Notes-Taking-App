import { useState } from "react";
import Create from './create.js';
const Modal = ({ color }) => {
    return (
        <div className="modal" onClick={(e)=>{e.stopPropagation()}}>
            {/* <div className="overlay" > */}
                <Create color={color}/>
            {/* </div> */}
        </div>
    );
}
// export {modal,toggleModal};
export default Modal;