import React from 'react'
import { useState } from 'react'
import Login from "../Login/Login"
import SignUp from '../Signup/SignUp'

function Auth() {
    const [index, setIndex] = useState(false);
    const toggleIndex=()=>{
        setIndex((prevState)=>!prevState);
    }
    return (
        <div>
            {!index? <Login/>: <SignUp/>}
            <p onClick={toggleIndex}>{!index?<p>"Register"</p>:<p>"Login"</p>}</p>
        </div>
    )
}

export default Auth
