import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import CartContext from "../../stores/cart-context";
import classes from './InfoCart.module.css'
function InfoCart(props){
    const CrtCtx=useContext(CartContext);
    return (
        <div className={`${classes.card} ${classes.flex_column}`}>
                <div className={classes.flex_row}>
                    <div>Số sản phẩm</div>
                    <div>{CrtCtx.totalBook}</div>
                </div>
                <div className={classes.flex_row}>
                    <div>Tổng tiền</div>
                    <div>{CrtCtx.totalPrice}<u>đ</u></div>
                </div>
                <div className={classes.flex_row}>
                    <div>Giảm khuyến mãi</div>
                    <div>{CrtCtx.totalPromotion}<u>đ</u></div>
                </div>
                <div className={classes.flex_row}>
                    <div>Phí giao hàng</div>
                    <div>0<u>đ</u></div>
                </div>
                <div className={classes.flex_row}>
                    <div>Thành tiền</div>
                    <div>{CrtCtx.totalPay}<u>đ</u></div>
                </div>
                <div className={classes.text_center}>
                    <Link to='/pay'><button className={classes.text_center}><b>Thanh toán</b></button></Link>
                </div>
        </div>
    )
}

export default InfoCart;
