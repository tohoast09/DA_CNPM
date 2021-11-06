import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { useState } from "react";
import CartContext from "../store/cart-context";
import Login from "../components/Sign/Login/Login";
import Backdrop from "./Backdrop";
import SignUp from "../components/Sign/Signup/SignUp";
import Forget from "../components/Sign/Forget/Forget";
import ForgetChangePass from "../components/Sign/Forget/ForgetChangePass";
import { Button } from "reactstrap";

function Header() {
    const CrtCtx = useContext(CartContext);

    const [loginPopup, setloginPopup] = useState(false);
    const [signupPopup, setsignupPopup] = useState(false);
    const [forgetPopup, setforgetPopup] = useState(false);
    const [changePassPopup, setchangePassPopup] = useState(false);
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
        <div>
            {(loginPopup || signupPopup || forgetPopup || changePassPopup) && (
                <Backdrop onQuit={hidePopupHandler} />
            )}

            {loginPopup && (
                <Login onSignup={openSignupPopup} onForget={openForgetPopup} />
            )}

            {signupPopup && <SignUp onLogin={openLoginPopup} />}

            {forgetPopup && (
                <Forget onLogin={openLoginPopup} onChange={openChangePopup} />
            )}

            {changePassPopup && <ForgetChangePass onLogin={openLoginPopup} />}

            <div className="top">
                <div className="header">
                    <div className="logo flex-column">BookStore Bach Khoa</div>
                    <div className="flex-column">
                        <div className="input">
                            <input type="text" name="book" />
                            <button>
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="flex-column">
                            {/* Chỗ này */}
                            <img onClick={openLoginPopup}
                                src="https://memehay.com/meme/20211010/em-ban-kem-danh-rang-p-s.jpg"
                                height="55px"
                                alt=""
                            />
                            <Button onClick={openLoginPopup}>Đăng nhập</Button>
                        </div>
                        <div className="flex-column ml5">
                            <span id="usrname">Đăng-user</span>
                            <button onClick={openLoginPopup} id="stt">Logout</button>
                        </div>
                    </div>
                    <div className="flex-column">
                        <div className="cart">
                            <button>
                                <Link to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span
                                        className="badge badge-warning"
                                        id="lblCartCount"
                                    >
                                        {CrtCtx.totalBook}
                                    </span>
                                </Link>
                            </button>
                            <span className="ml5">Giỏ hàng</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
