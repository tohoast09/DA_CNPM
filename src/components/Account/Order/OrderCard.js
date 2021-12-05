import React from "react";
import { Link } from "react-router-dom";
import { useUserInfo } from "../../../assets/firebase-data/getUserAPI";
import classes from "./Order.module.css";

function OrderCard(props) {
  const getStatus = () => {
    switch (props.status) {
      case "unconfirmed":
        return "Đang xử lý";
      case "complete":
        return "Giao hàng thành công";
      case "in transit":
        return "Đang vận chuyển";
    }
  };
  const { getOrderDetail } = useUserInfo();
  return (
    <div className={classes.orderCard}>
      <div className={classes.orderId}>
        <Link className={classes.link}
          onClick={() => {
            getOrderDetail(props.id);
          }}
          to="/account/orderdetail"
        >
          <span>#{props.id}</span>
        </Link>
      </div>
      <div className={classes.orderDate}>
        <span>{props.date}</span>
      </div>
      <div className={classes.orderDescription}>
        <span>{props.description}</span>
        {/* <Link
                    onClick={() => {
                        getOrderDetail(props.id);
                    }}
                    to="/account/orderdetail"
                >
                    Xem chi tiết
                </Link> */}
      </div>
      <div className={classes.orderPrice}>
        <span>{Number(props.cost).toLocaleString()}₫</span>
      </div>
      <div className={classes.orderStatus}>
        <span>{getStatus()}</span>
      </div>
    </div>
  );
}

export default OrderCard;
