import React, { useState } from "react";
import Backdrop from "../components/authen/Backdrop"
import ForgetPass from "../components/authen/Forget";
import ForgetChangePass from "../components/authen/ForgetChangePass";
import Login from "../components/authen/Login";
import sign from "../components/authen/Sign.module.css";
import SignUp from "../components/authen/SignUp";



function Authentication() {
    const [authPop, setAuthPop] = useState("login");
    return (
        <div className={sign.authentication}>
            <Backdrop/>

            {authPop === "login" && (
                <Login
                    onSignup={() => setAuthPop("signup")}
                    onForget={() => setAuthPop("forget")}
                />
            )}

            {authPop === "signup" && <SignUp onLogin={() => setAuthPop("login")} />}

            {authPop === "forget" && (
                <ForgetPass
                    onLogin={() => setAuthPop("login")}
                    onChange={() => setAuthPop("change")}
                />
            )}

            {authPop === "change" && (
                <ForgetChangePass onLogin={() => setAuthPop("login")} />
            )}
        </div>
    );
}

export default Authentication;
