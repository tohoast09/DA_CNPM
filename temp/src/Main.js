import React from "react";
import { useUserContext } from "./context/userContext";
import Authentication from "./components/Sign/Authentication";
import Button from "@mui/material/Button";

function Main() {
    const { logoutUser, user } = useUserContext();
    // console.log(user.uid);

    return (
        <div>
            <div>
                {user ? (
                    // (<p>Đây là màn hình chính</p>
                    <>
                        <Button onClick={logoutUser}>Logout</Button>
                        {user.email}
                    </>
                ) : (
                    <Authentication />
                )}
            </div>
        </div>
    );
}

export default Main;
