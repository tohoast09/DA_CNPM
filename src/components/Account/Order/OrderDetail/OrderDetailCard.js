import React from "react";
import order from "../Order.module.css";
// import Button from "@mui/material/Button";

function OrderDetailCard(props) {
    console.log("img src: ",props.data.img)
    return (
        <div className={order.OrderDetailCard}>
            <div className={order.orderProduct}>
                    <img src="https://www.trustpilot.com/review/bobcares.com?utm_medium=Trustbox&utm_source=BlogPost" alt="Hình ảnh sản phẩm" width="500" height="600"/>
                <div className={order.productImg}>
                </div>
                <div className={order.productProp}>
                    <div className={order.productName}>{props.data.bookName}</div>
                </div>
            </div>
            <div className={order.unitPrice}>
                <span>{props.data.price}₫</span>
            </div>
            <div className={order.productQty}>
                <span>{props.data.quantity}</span>
            </div>
            <div className={order.totalPrice}>
                <span>{props.data.price*props.data.quantity}₫</span>
            </div>
        </div>
    );
}

export default OrderDetailCard;
