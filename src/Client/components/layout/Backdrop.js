import React from 'react'

function Backdrop(props) {
    return(
        <div className='backdrop' onClick={props.onQuit}></div>
    );
}

export default Backdrop
