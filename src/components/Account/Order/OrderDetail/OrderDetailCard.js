import React from "react";
import order from "../Order.module.css";
import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";

function OrderDetailCard(props) {
    console.log("img src: ", props.data.img);
    return (
        <div className={order.OrderDetailCard}>
            <div className={order.orderProduct}>
                <div className={order.productImg}>
                <Link to={`/catalog/${props.data.id}`}>
                    <img
                        src={props.data.img}
                        alt="Hình ảnh sản phẩm"
                        height="100%"
                    />
                    </Link>
                </div>
                <div className={order.productProp}>
                    <div className={order.productName}>
                        {props.data.bookName}
                    </div>
                </div>
            </div>
            <div className={order.unitPrice}>
                <span>{Number(props.data.price).toLocaleString()}₫</span>
            </div>
            <div className={order.productQty}>
                <span>{props.data.quantity}</span>
            </div>
            <div className={order.totalPrice}>
                <span>{Number(props.data.price * props.data.quantity).toLocaleString()}₫</span>
            </div>
        </div>
    );
}

export default OrderDetailCard;