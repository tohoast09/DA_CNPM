import { useContext, useRef } from "react";
import SearchParam from "../stores/SearchParam";
import { Link, useHistory } from "react-router-dom";
import CartContext from "../stores/cart-context";
import app from "./Sign/Authentication/fire.js";

import Backdrop from "./layout/Backdrop";
// import Login from "./Sign/Login/Login";
import MUILogin from "./Sign/Login/MUILogin";
import SignUp from "./Sign/Signup/SignUp";
import Forget from "./Sign/Forget/Forget";
import ForgetChangePass from "./Sign/Forget/ForgetChangePass";
// import { Button } from "reactstrap";
import { useState, useEffect } from "react";

function Header(props) {
    const searchParamCtx = useContext(SearchParam);
    const nameInputRef = useRef();
    const history = useHistory();
    function searchForName(event) {
        event.preventDefault();
        event.stopPropagation();

        searchParamCtx.clearFilter();
        searchParamCtx.setName(nameInputRef.current.value);
        nameInputRef.current.value = "";
        history.push("/search");
    }
    const CrtCtx = useContext(CartContext);

    const [popUp, setPopUp] = useState("");

    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail("");
        setPassword("");
    };

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    };

    const handleLogin = () => {
        clearErrors();
        app.auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log("run");
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disable":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        app.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log("run");
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const handleLogout = () => {
        app.auth().signOut();
    };

    const authListener = () => {
        app.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    // useEffect(() => {
    //     authListener();
    // }, []);

    return (
        <div className="header">
            <div className="logo flex-column">BookStore Bach Khoa</div>
            <form className="input" onSubmit={searchForName}>
                <input type="text" id="name" ref={nameInputRef} />
                <Link to="/search">
                    <button onClick={searchForName}>
                        <i className="fas fa-search"></i>
                    </button>
                </Link>
            </form>
            <div className="user">
                <button onClick={()=>setPopUp("login")}>
                    <i className="fas fa-user"></i>
                </button>
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

            {popUp != "" && (
                <Backdrop
                    onQuit={() => {
                        setPopUp("");
                    }}
                />
            )}

            {popUp === "login" && (
                <MUILogin
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    //
                    onSignup={() => setPopUp("signup")}
                    onForget={() => setPopUp("forget")}
                />
            )}

            {popUp === "signup" && (
                <SignUp
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    onLogin={() => setPopUp("login")}
                />
            )}

            {popUp === "forget" && (
                <Forget
                    onLogin={() => setPopUp("login")}
                    onChange={() => setPopUp("change")}
                />
            )}

            {popUp === "change" && (
                <ForgetChangePass onLogin={() => setPopUp("login")} />
            )}
        </div>
    );
}
export default Header;
