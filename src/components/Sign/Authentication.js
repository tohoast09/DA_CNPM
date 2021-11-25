
import React, { useState } from "react";
import Backdrop from "./Backdrop"
import ForgetPass from "./Forget/Forget";
import ForgetChangePass from "./Forget/ForgetChangePass";
import Login from "./Login/Login";
import sign from "./Sign.module.css";
import SignUp from "./Signup/SignUp";

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