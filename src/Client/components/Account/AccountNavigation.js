import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import classes from './Account.module.css'
function AccountNavigation() {
    return (
        <div>
                <div className={classes.InfoNav}>
                    <div className={classes.Avatar}>
                        <div className={classes.img}>

                        </div>
                        <Button className={classes.btn}>Change Avatar</Button>
                    </div>
                    <Link to= '/account/'><Button className={classes.btn}><span>Thông tin cá nhân</span></Button></Link>
                    <Link to= '/account/noti'><Button className={classes.btn}><span>Thông báo</span></Button></Link>
                    <Link to= '/account/orders'><Button className={classes.btn}><span>Danh sách đơn hàng</span></Button></Link>
                    <Link to= '/account/address'><Button className={classes.btn}><span>Danh sách địa chỉ</span></Button></Link>
                </div >
        </div>
    );
}
export default AccountNavigation;
