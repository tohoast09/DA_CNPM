import React from "react";
import order from "../Order.module.css";
// import Button from "@mui/material/Button";

function OrderDetailCard(props) {
    console.log("img src: ",props.data.img)
    return (
        <div className={order.OrderDetailCard}>
            <div className={order.orderProduct}>
                <div className={order.productImg}>
                <img src={props.data.img} alt="Hình ảnh sản phẩm" width="500" height="600"/>

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
