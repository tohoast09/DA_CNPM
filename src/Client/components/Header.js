import { useContext, useRef } from "react";
import SearchParam from "../stores/SearchParam";
import { Link,useHistory } from "react-router-dom";
import CartContext from "../stores/cart-context";

import Backdrop from "./layout/Backdrop";
import Login from "./Sign/Login/Login";
import SignUp from "./Sign/Signup/SignUp";
import Forget from "./Sign/Forget/Forget";
import ForgetChangePass from "./Sign/Forget/ForgetChangePass";
// import { Button } from "reactstrap";
import { useState } from "react";


function Header(props){
    const searchParamCtx=useContext(SearchParam);
    const nameInputRef=useRef();
    const history=useHistory();
    function searchForName(event){
        event.preventDefault();
        event.stopPropagation();

        searchParamCtx.clearFilter();
        searchParamCtx.setName(nameInputRef.current.value)
        nameInputRef.current.value='';
        history.push('/search')
    }
    const CrtCtx=useContext(CartContext);

    const [loginPopup, setloginPopup] = useState(false);
    const [signupPopup, setsignupPopup] = useState(false);
    const [forgetPopup, setforgetPopup] = useState(false);
    const [changePassPopup, setchangePassPopup] = useState(false);
    // const [signupPopup, setsignupPopup] = useState(false);
    // function handleLogin(){};
    // function handleSignup(){};
    // function handleQuitPopup(){setloginPopup(false); setsignupPopup(false)};
    function hidePopupHandler() {
        setloginPopup(false);
        setsignupPopup(false);
        setforgetPopup(false);
        setchangePassPopup(false);
    }

    function openLoginPopup() {
        setloginPopup(true);
        setsignupPopup(false);
        setforgetPopup(false);
        setchangePassPopup(false);
    }
    function openSignupPopup() {
        setloginPopup(false);
        setsignupPopup(true);
        setforgetPopup(false);
        setchangePassPopup(false);
    }
    function openForgetPopup() {
        setloginPopup(false);
        setsignupPopup(false);
        setforgetPopup(true);
        setchangePassPopup(false);
    }
    function openChangePopup() {
        setloginPopup(false);
        setsignupPopup(false);
        setforgetPopup(false);
        setchangePassPopup(true);
    }


    return (
            <div className='header'>
               

                <div className='logo flex-column'>BookStore Bach Khoa</div>
                <form className='input'  onSubmit={searchForName}>
                            <input type="text" id="name" ref={nameInputRef}  />
                        <Link to="/search"><button onClick={searchForName}><i className="fas fa-search"></i></button></Link>
                </form>
                <div className='user'>
                    <button onClick={openLoginPopup}><i className='fas fa-user'></i></button>
                </div>
                <div className='flex-column'>
                    <div className='cart'><button>
                        <Link to='/cart'><i className='fas fa-shopping-cart'></i>
                            <span className='badge badge-warning' id='lblCartCount'>{CrtCtx.totalBook}</span>
                        </Link></button><span className='ml5'>Giỏ hàng</span></div>
                </div>

                 {/* <Backdrop/> */}
            {(loginPopup || signupPopup || forgetPopup || changePassPopup) && <Backdrop onQuit={hidePopupHandler} />}

            {loginPopup && <Login onSignup={openSignupPopup} onForget={openForgetPopup} onQuit={hidePopupHandler}/>}
            
            {signupPopup && <SignUp onLogin={openLoginPopup} />}
            
            {forgetPopup && <Forget onLogin={openLoginPopup} onChange={openChangePopup}/>}
            
            {changePassPopup && <ForgetChangePass onLogin={openLoginPopup}/>}
        {/* <Backdrop/> */}
        </div>
        );
}
export default Header;