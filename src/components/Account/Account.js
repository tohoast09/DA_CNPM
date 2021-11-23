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
import { Link, NavLink } from "react-router-dom";
import GetUserProvider from "../../context/getUserAPI";
function Account() {
    return (
        <GetUserProvider>
        <div className={classes.Info}>
            {/* <Row> */}

            <AccountNavigation />
            {/* <div className={classes.InfoNav}>
                <div className={classes.Avatar}>
                    <div className={classes.img}></div>
                    <Link to="/account/changeavatar" className={classes.avaBtn}>
                        Sửa ảnh đại diện
                    </Link>
                </div>
                <NavLink
                    exact
                    activeClassName={classes.linkBtnActive}
                    className={classes.linkBtn}
                    to="./"
                >
                    {" "}
                    <span>Thông tin cá nhân</span>{" "}
                </NavLink>
                <NavLink
                    activeClassName={classes.linkBtnActive}
                    className={classes.linkBtn}
                    to="./noti/"
                >
                    {" "}
                    <span>Thông báo</span>{" "}
                </NavLink>
                <NavLink
                    activeClassName={classes.linkBtnActive}
                    className={classes.linkBtn}
                    to="./orders/"
                >
                    {" "}
                    <span>Danh sách đơn hàng</span>{" "}
                </NavLink>
                <NavLink
                    activeClassName={classes.linkBtnActive}
                    className={classes.linkBtn}
                    to="./address/"
                >
                    {" "}
                    <span>Danh sách địa chỉ</span>{" "}
                </NavLink>
            </div> */}
            <Container className={classes.Content}>
                <Routes>
                    <Route path="/" element={<UserInfo />} />
                    <Route path="/address" element={<Address />} />
                    <Route path="/orders/" element={<Order />} />
                    <Route path="/noti/" element={<Noti />} />
                    <Route path="/orderdetail" element={<OrderDetail />} />
                    <Route path="/changeavatar" element={<ChangeAvatar />} />
                </Routes>
            </Container>
        </div>
        </GetUserProvider>
    );
}
export default Account;
