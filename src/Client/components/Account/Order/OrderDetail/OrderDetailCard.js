import React from "react";
import order from "../Order.module.css";

function OrderDetailCard() {
    return (
        <div className={order.OrderDetailCard}>
            <div className={order.orderProduct}>
                <div className={order.productImg}></div>
                <div className={order.productProp}>
                    <div className={order.productName}>Nhà Giả Kim</div>
                    <button className={order.productDetail}>
                        Xem chi tiết
                    </button>
                    <button className={order.productAdd}>
                        Thêm vào giỏ hàng
                    </button>
                </div>
            </div>
            <div className={order.unitPrice}>
                <span>50000đ</span>
            </div>
            <div className={order.productQty}>
                <span>2</span>
            </div>
            <div className={order.productDiscount}>
                <span>0đ</span>
            </div>
            <div className={order.totalPrice}>
                <span>100000đ</span>
            </div>
        </div>
    );
}

export default OrderDetailCard;
