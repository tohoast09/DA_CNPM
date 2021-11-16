import React from "react";
import { NavLink } from 'react-router-dom';
import account from "../Account.module.css";
// import { useState } from "react";

function AccNavBar() {

    

    return (
        <div className={account.InfoNav}>
            <nav className="navbar">
                <NavLink
                    exact
                    activeClassName={account.navbarLinkActive}
                    className={account.navbarLink}
                    to="/account/"
                >
                    Thông tin cá nhân
                </NavLink>
                <NavLink
                    activeClassName={account.navbarLinkActive}
                    className={account.navbarLink}
                    to="/account/noti"
                >
                    Thông báo
                </NavLink>
                <NavLink
                    activeClassName={account.navbarLinkActive}
                    className={account.navbarLink}
                    to="/account/orders"
                >
                    Đơn hàng
                </NavLink>
                <NavLink
                    activeClassName={account.navbarLinkActive}
                    className={account.navbarLink}
                    to="/account/address"
                > Địa chỉ</NavLink>
            </nav>
        </div>
    );
}
export default AccNavBar;