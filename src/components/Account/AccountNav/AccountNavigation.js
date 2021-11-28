// import { Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import classes from "../Account.module.css";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";

function AccountNavigation() {
    const { userInfo } = useUserInfo();
    return (
        <div>
            <div className={classes.InfoNav}>
                <div className={classes.Avatar}>
                    <div
                        className={classes.img}
                        style={{
                            background: `url(${userInfo.img}) center / cover no-repeat`
                        }}
                    ></div>
                    {/* <NavLink to='/account/changeavatar' className={navData=>navData.isActive?classes.avtBtnActive:classes.avtBtn}>Sửa ảnh đại diện</NavLink> */}
                </div>
                <NavLink
                    end
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account"
                >
                    {" "}
                    <span>Thông tin cá nhân</span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account/noti/"
                >
                    {" "}
                    <span>Thông báo</span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account/orders/"
                >
                    {" "}
                    <span>Danh sách đơn hàng</span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account/address/"
                >
                    {" "}
                    <span>Danh sách địa chỉ</span>{" "}
                </NavLink>
                <NavLink
                    className={(navData) =>
                        navData.isActive
                            ? `${classes.linkBtnActive} ${classes.linkBtn}`
                            : classes.linkBtn
                    }
                    to="/account/wallet/"
                >
                    {" "}
                    <span>Ví</span>{" "}
                </NavLink>
            </div>
        </div>
    );
}
export default AccountNavigation;
