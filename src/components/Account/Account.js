import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Switch } from "react-router";
import AccountNavigation from "./AccountNav/AccountNavigation";
// import AccNavBar from "./AccountNav/AccNavBar";
import Address from "./Address/Address";
import Order from "./Order/Order";
import UserInfo from "./Info/UserInfo";
import Noti from "./Noti/Noti";
import OrderDetail from "./Order/OrderDetail/OrderDetail";
import { Container, Row } from "reactstrap";
import classes from "./Account.module.css";
import ChangeAvatar from "./AccountNav/ChangeAvatar";
import GetUserProvider from "../../context/getUserAPI";
function Account() {
    return (
        <GetUserProvider>
            <div className={classes.Info}>
                <AccountNavigation />

                <Container className={classes.Content}>
                    <Routes>
                        <Route path="/" element={<UserInfo />} />
                        <Route path="/address" element={<Address />} />
                        <Route path="/orders/" element={<Order />} />
                        <Route path="/noti/" element={<Noti />} />
                        <Route path="/orderdetail" element={<OrderDetail />} />
                        <Route
                            path="/changeavatar"
                            element={<ChangeAvatar />}
                        />
                    </Routes>
                </Container>
            </div>
        </GetUserProvider>
    );
}
export default Account;
