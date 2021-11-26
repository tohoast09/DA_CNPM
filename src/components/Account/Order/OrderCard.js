import React from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
import classes from "./Order.module.css";

function OrderCard(props) {
    const { getOrderDetail } = useUserInfo();
    return (
        <div className={classes.orderCard}>
            <div className={classes.orderId}>
                <span>#{props.id}</span>
            </div>
            <div className={classes.orderDate}>
                <span>{props.date}</span>
            </div>
            <div className={classes.orderDescription}>
                <span>{props.description}</span>
                <Link
                    onClick={() => {
                        getOrderDetail(props.id);
                    }}
                    to="/account/orderdetail"
                >
                    Xem chi tiết
                </Link>
            </div>
            <div className={classes.orderPrice}>
                <span>{props.cost}₫</span>
            </div>
            <div className={classes.orderStatus}>
                <span>{props.status}</span>
            </div>
        </div>
    );
}

export default OrderCard;
