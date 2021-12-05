import React from 'react'
import sign from './Sign.module.css'

function Backdrop(props) {
    return(
        <div className={sign.backdrop} onClick={props.onQuit}></div>
    );
}

export default Backdrop
