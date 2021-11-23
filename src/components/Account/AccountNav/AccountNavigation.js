// import { Button } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import classes from '../Account.module.css'
function AccountNavigation() {
    return (
        <div>
                <div className={classes.InfoNav}>
                    <div className={classes.Avatar}>
                        <div className={classes.img}>

                        </div>
                        <Link to='/account/changeavatar' className={classes.avaBtn}>Sửa ảnh đại diện</Link>
                    </div>
                    <NavLink exact activeClassName={classes.linkBtnActive} className={classes.linkBtn} to= '/account'>  <span>Thông tin cá nhân</span>  </NavLink>
                    <NavLink activeClassName={classes.linkBtnActive} className={classes.linkBtn} to= '/account/noti/'>    <span>Thông báo</span>          </NavLink>
                    <NavLink activeClassName={classes.linkBtnActive} className={classes.linkBtn} to= '/account/orders/'>  <span>Danh sách đơn hàng</span> </NavLink>
                    <NavLink activeClassName={classes.linkBtnActive} className={classes.linkBtn} to= '/account/address/'> <span>Danh sách địa chỉ</span>  </NavLink>
                </div >
        </div>
    );
}
export default AccountNavigation;
