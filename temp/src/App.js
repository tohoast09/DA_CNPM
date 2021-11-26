// import logo from './logo.svg';
import "./App.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Backdrop from "./components/Sign/Backdrop";
// import Login from "./components/Sign/Login/Login";
// import SignUp from "./components/Sign/Signup/SignUp";
// import Forget from "./components/Sign/Forget/Forget";
// import ForgetChangePass from "./components/Sign/Forget/ForgetChangePass";
// import Address from "./components/Account/Address/Address";
// import Noti from "./components/Account/Noti/Noti";
// import Order from "./components/Account/Order/Order";
// import app from "./components/Sign/temp/fire.js";
// import Authentication from "./components/Sign/Authentication";
import Account from "./components/Account/Account";
import Main from "./Main.js";

import { Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import { useUserContext } from "./context/userContext";

function App() {
    // const [popUp, setPopUp] = useState("");

    // const [user, setUser] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [hasAccount, setHasAccount] = useState(false);

    // const clearInputs = () => {
    //     setEmail("");
    //     setPassword("");
    // };

    // const clearErrors = () => {
    //     setEmailError("");
    //     setPasswordError("");
    // };

    // const handleLogin = () => {
    //     clearErrors();
    //     app.auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .catch((err) => {
    //             console.log("run");
    //             switch (err.code) {
    //                 case "auth/invalid-email":
    //                 case "auth/user-disable":
    //                 case "auth/user-not-found":
    //                     setEmailError(err.message);
    //                     break;
    //                 case "auth/wrong-password":
    //                     setPasswordError(err.message);
    //                     break;
    //             }
    //         });
    // };

    // const handleSignup = () => {
    //     clearErrors();
    //     app.auth()
    //         .createUserWithEmailAndPassword(email, password)
    //         .catch((err) => {
    //             console.log("run");
    //             switch (err.code) {
    //                 case "auth/email-already-in-use":
    //                 case "auth/invalid-email":
    //                     setEmailError(err.message);
    //                     break;
    //                 case "auth/weak-password":
    //                     setPasswordError(err.message);
    //                     break;
    //             }
    //         });
    // };

    // const handleLogout = () => {
    //     app.auth().signOut();
    // };

    // const authListener = () => {
    //     app.auth().onAuthStateChanged((user) => {
    //         if (user) {
    //             clearInputs();
    //             setUser(user);
    //         } else {
    //             setUser("");
    //         }
    //     });
    // };

    // useEffect(() => {
    //     authListener();
    // }, []);
    const {  user } =
        useUserContext();

    return (
        <div className="App">
            <Routes>
                <Route path="/" exact element={<Main />} />
                {user&&<Route path="/account/*" element={<Account />} />}
                {/* <Route path="/address" element={<Address />} />
                    <Route path="/account/orders/" element={<Order />} />
                    <Route path="/account/noti/" element={<Noti />} /> */}
            </Routes>
            <Link to= "/account"><Button variant="contained">
                Account
            </Button></Link>
            {/* <Button onClick={logoutUser}>Logout</Button> */}
            {/* <Main/> */}

            {/* {loading ? (
                <h2>Loading...</h2>
            ) : (
                <>
                    {user ? (
                        <Routes>
                            <Route to="/"></Route>
                        </Routes>
                    ) : (
                        <Authentication />
                    )}
                </>
            )} */}
            
        </div>
    );
}

export default App;
